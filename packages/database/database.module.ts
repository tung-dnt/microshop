import { Module, DynamicModule, Global } from '@nestjs/common'
import { Client } from 'pg'
import { zdrizzle } from 'drizzle-orm/node-postgres'

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(options: {
    user: string
    host: string
    database: string
    password: string
    port: number
  }): DynamicModule {
    const databaseProvider = {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const client = new Client(options)
        await client.connect()
        return zdrizzle(client)
      },
    }

    return {
      module: DatabaseModule,
      providers: [databaseProvider],
      exports: [databaseProvider],
    }
  }
}
