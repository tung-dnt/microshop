import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import pick from 'lodash/pick'
import { UserProfile } from '@shared/types'
import { catchAsync } from '@shared/utils'
import { UserService } from './user.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private readonly reflector: Reflector,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const isProtected = this.reflector.get('protected', context.getHandler())

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

  private getToken(bearer: string) {
    return bearer.split(' ')[1] ?? ''
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

  private generatePublicKey() {
    return `-----BEGIN PUBLIC KEY-----\n${this.configService.get('PUBLIC_KEY')}\n-----END PUBLIC KEY-----`
  }

  private async serializeUser(token: string): Promise<UserProfile> {
    const tokenUser = this.validateToken(token)
    const [error, user] = await catchAsync(
      this.userService.findUnique(pick(tokenUser, ['tel', 'email']))
    )
    if(error) throw new HttpException('Can not serialize user', 500)

    return user
  }
}
