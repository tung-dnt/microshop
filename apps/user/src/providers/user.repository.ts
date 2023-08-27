import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/user'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {
  }

  async findUniqueBy(uniqQuery: Prisma.UsersWhereUniqueInput) {
    const authorizedQuery =  {
      userOnRoles: {
        select: {
          role: {
            select: {
              name: true,
              roleOnPermissions: {
                select: {
                  permission: {
                    select: { name: true }
                  }
                }
              }
            }
          }
        }
      }
    }
    return this.prisma.users.findUnique({
      where: uniqQuery,
      include: {
        ...authorizedQuery,
        address: true
      }
    })
  }
}