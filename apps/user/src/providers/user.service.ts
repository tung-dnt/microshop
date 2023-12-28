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

  // axios.post(`${KCHOST}/auth/realms/${REALM}/protocol/openid-connect/token`, {
  //   client_id: CLIENT_ID,
  //   client_secret: CLIENT_SECRET,
  //   grant_type: 'client_credentials'
  // })
  //   .then(response => {
  //     const ACCESS_TOKEN = response.data.access_token;
  //     // Use the ACCESS_TOKEN as needed
  //     console.log(ACCESS_TOKEN);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

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