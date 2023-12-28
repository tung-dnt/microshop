import { Inject, Injectable } from '@nestjs/common'
import {
  permissions,
  roles,
  rolesOnPermissions,
  users,
  usersOnRoles
} from '@shared/database'
import { UserProfile } from '@shared/types'
import { eq, sql } from 'drizzle-orm'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { RegisterDto } from 'src/controllers/dto/register.dto'

@Injectable()
export class UserRepository {
  constructor(@Inject('DATABASE_CONNECTION') private db: NodePgDatabase) {
  }

  async findMany() {
    return this.db.select().from(users)
  }

  async findByKeycloakId(keycloakId: string): Promise<UserProfile> {
    return (await this.db
      .select({
        id: users.id,
        fullName: sql<string>`concat(${users.firstname}, " ", ${users.lastname})`,
        email: users.email,
        roles: sql<Array<string>>`array_agg(${roles.name})`,
        permissions: sql<Array<string>>`array_agg(${permissions.name})`,
      })
      .from(users)
      .leftJoin(usersOnRoles, eq(users.id, usersOnRoles.userId))
      .leftJoin(roles, eq(roles.id, usersOnRoles.roleId))
      .leftJoin(rolesOnPermissions, eq(roles.id, rolesOnPermissions.roleId))
      .leftJoin(permissions, eq(permissions.id, rolesOnPermissions.permissionId))
      .where(eq(users.keycloakId, keycloakId))
      .limit(1))[0]
  }

  async insert(data: RegisterDto) {
    return this.db.insert(users).values(data).returning()
  }
}