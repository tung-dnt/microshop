import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { Inject, Injectable } from '@nestjs/common'
import { Users } from '@shared/database'
import { RegisterDto } from 'src/controllers/dto/register.dto'

@Injectable()
export class UserRepository {
  constructor(@Inject('DATABASE_CONNECTION') private dbClient: NodePgDatabase) {
  }

  async findMany() {
    return this.dbClient.select().from(Users)
  }

  async findFirst(query: RegisterDto) {
    return this.dbClient.select().from(Users).where(query).limit(1)
  }

  async insert(data: RegisterDto) {
    return this.dbClient.insert(Users).values(data).returning()
  }
}