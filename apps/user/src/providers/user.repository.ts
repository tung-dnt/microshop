import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { Inject, Injectable } from '@nestjs/common'
import { users } from '@shared/database'
import { RegisterDto } from 'src/controllers/dto/register.dto'

@Injectable()
export class UserRepository {
  constructor(@Inject('DATABASE_CONNECTION') private dbClient: NodePgDatabase) {
  }

  async findMany() {
    return await this.dbClient.select().from(users)
  }

  async insert(data: RegisterDto) {
    return await this.dbClient.insert(users).values(data).returning()
  }
}