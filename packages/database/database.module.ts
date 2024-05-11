import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { DB_PROVIDER_TOKEN } from '@shared/constants'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

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
    const DatabaseProvider = {
      provide: DB_PROVIDER_TOKEN,
      useFactory: async () => {
        const client = new Client(options)

        await client.connect()

        return drizzle(client)
      },
    }

    return {
      module: DatabaseModule,
      providers: [DatabaseProvider],
      exports: [DatabaseProvider],
    }
  }
}
