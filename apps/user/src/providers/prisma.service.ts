import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/user'
import { softDelete } from '@shared/prisma'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$use(softDelete)
    await this.$connect()
  }
}
