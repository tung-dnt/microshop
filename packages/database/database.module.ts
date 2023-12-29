import { Module, DynamicModule, Global } from '@nestjs/common'
import { Client } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

import { DB_PROVIDER_TOKEN } from './constants'

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
      provide: DB_PROVIDER_TOKEN,
      useFactory: async () => {
        const client = new Client(options)
        await client.connect()
        return drizzle(client)
      },
    }

    return {
      module: DatabaseModule,
      providers: [databaseProvider],
      exports: [databaseProvider],
    }
  }
}
