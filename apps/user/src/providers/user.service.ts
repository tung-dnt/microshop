import { Injectable } from '@nestjs/common'
import omit from 'lodash/omit'
import uniq from 'lodash/uniq'
import compact from 'lodash/compact'
import { Prisma } from '@prisma/user'
import { UserProfile } from '@shared/types'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    // private provinceService: ProvinceService,
  ) {
  }

  async findUnique(param: Prisma.UsersWhereUniqueInput): Promise<UserProfile> {
    const roles: Array<string> = []
    const permissions: Array<string> = []
    const user = await this.userRepository.findUniqueBy(param)

    user?.userOnRoles?.forEach(userOnRole => {
      // @ts-ignore
      roles.push(userOnRole.role.name)

      // @ts-ignore
      const rolePermissions = userOnRole.role.roleOnPermissions.map(roleOnPermission => roleOnPermission.permission.name)
      permissions.push(...rolePermissions)
    })

    return {
      ...omit(user, ['userOnRoles']),
      roles: compact(uniq(roles)),
      permissions: compact(uniq(permissions))
    }
  }
}