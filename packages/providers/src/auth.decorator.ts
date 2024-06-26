import type { ExecutionContext } from '@nestjs/common'
import { createParamDecorator, SetMetadata } from '@nestjs/common'
import type { UserPermission } from '@shared/types'

export const Permissions = (...permissions: UserPermission[]) =>
  SetMetadata('permissions', permissions)

export const Secured = () => SetMetadata('secured', true)

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    return request.user
  }
)
