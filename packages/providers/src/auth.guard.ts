import { HttpService } from '@nestjs/axios'
import type {
  CanActivate,
  ExecutionContext
} from '@nestjs/common'
import {
  HttpException,
  Injectable
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import type { UserProfile } from '@shared/types'
import { catchAsync } from '@shared/utils'
import type { AxiosInstance } from 'axios'

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly axios: AxiosInstance

  constructor(
    private readonly httpService: HttpService,
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly path: string
  ) {
    this.axios = this.httpService.axiosRef
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    const allowedPermissions: string[] = this.reflector.get(
      'permissions',
      context.getHandler(),
    )

    if (!allowedPermissions) return true // public request

    const token = this.getToken(request?.headers?.authorization || '')
    const user = await this.serializeUser(token)

    if (!user || !user.permissions) return false
    request.user = user

    return (
      this.matchAuthor({
        userPermissions: user.permissions,
        allowedPermissions,
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
        algorithms: [ 'RS256' ]
      }
    )
  }

  private getToken(bearer: string) {
    return bearer?.split(' ')[1] ?? ''
  }

  private generatePublicKey() {
    return `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLIC_KEY}\n-----END PUBLIC KEY-----`
  }

  private async serializeUser(token: string): Promise<UserProfile> {
    if (!token) return null

    const tokenUser = this.validateToken(token)
    const [ error, { data: user } ] = await catchAsync(
      // TODO: remove hard-coded url
      this.axios.get<UserProfile>(this.path, {
        params: { keycloakId: tokenUser.sid }
      }),
    )

    if (error) throw new HttpException('Can not serialize user', 500)

    console.log(user)

    return user
  }
}
