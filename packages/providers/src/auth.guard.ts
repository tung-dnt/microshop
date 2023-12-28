import { HttpService } from '@nestjs/axios'
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { UserProfile } from '@shared/types'
import { catchAsync } from '@shared/utils'
import { AxiosInstance } from 'axios'

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly axios: AxiosInstance

  constructor(
    private readonly httpService: HttpService,
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.axios = this.httpService.axiosRef
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const contextHandler = context.getHandler()
    const isProtected = this.reflector.get('protected', contextHandler)

    if (!isProtected) return true // public request

    const allowedPermissions: string[] = this.reflector.get(
      'permissions',
      context.getHandler(),
    )

    const token = this.getToken(request.authorization)
    const user = await this.serializeUser(token)

    if (!user || !user.permissions) return false
    request.user = user

    return (
      this.matchAuthor({
        userPermissions: user.permissions,
        allowedPermissions: allowedPermissions,
      })
    )
  }

  private matchAuthor(payload: {
    userPermissions: string[];
    allowedPermissions: string[];
  }): boolean {
    const { userPermissions, allowedPermissions } = payload

    if (!allowedPermissions) return true

    return userPermissions.some((item) => allowedPermissions.includes(item))
  }

  private validateToken(token: string) {
    return this.jwtService.verify(
      token,
      {
        publicKey: this.generatePublicKey(),
        algorithms: ['RS256']
      }
    )
  }

  private getToken(bearer: string) {
    return bearer.split(' ')[1] ?? ''
  }

  private generatePublicKey() {
    return `-----BEGIN PUBLIC KEY-----\n${this.configService.get('PUBLIC_KEY')}\n-----END PUBLIC KEY-----`
  }

  private async serializeUser(token: string): Promise<UserProfile> {
    const tokenUser = this.validateToken(token)
    const [error, { data: user }] = await catchAsync(
      this.axios.get<UserProfile>('http://user:5000/api/users/profile', {
        params: { keycloakId: tokenUser.sid }
      }),
    )

    if(error) throw new HttpException('Can not serialize user', 500)

    return user
  }
}
