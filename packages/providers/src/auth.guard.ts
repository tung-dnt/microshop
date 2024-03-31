import { HttpService } from '@nestjs/axios'
import type {
  CanActivate,
  ExecutionContext
} from '@nestjs/common'
import {
  Injectable
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { EnvService } from '@shared/config'
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
    private readonly envService: EnvService,
  ) {
    this.axios = this.httpService.axiosRef
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const contexthandler = context.getHandler()

    const allowedPermissions: string[] = this.reflector.get(
      'permissions',
      contexthandler,
    )
    const isSecured: boolean = this.reflector.get(
      'secured',
      contexthandler,
    )

    if (!allowedPermissions && !isSecured) return true // public request

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
        algorithms: ['RS256']
      }
    )
  }

  private getToken(bearer: string) {
    return bearer?.split(' ')[1] ?? ''
  }

  private generatePublicKey() {
    return `-----BEGIN PUBLIC KEY-----\n${this.envService.get('keycloak.publicKey')}\n-----END PUBLIC KEY-----`
  }

  private async serializeUser(token: string): Promise<UserProfile> {
    if (!token) return null
    const tokenUser = this.validateToken(token)
    const endpoint = this.envService.get('auth.serializeEndpoint')
    const [error, response] = await catchAsync(
      this.axios.get<UserProfile>(endpoint, {
        params: { keycloakId: tokenUser.sid }
      }),
    )

    return error ? null : response.data
  }
}
