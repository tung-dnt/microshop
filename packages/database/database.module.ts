import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { DB_PROVIDER_TOKEN } from '@shared/constants'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

@Global()
@Module({})
export class DatabaseModule {
  static forRoot<TSchema extends Record<string, unknown>>(options: {
    user: string
    host: string
    database: string
    password: string
    port: number
  }, schema?: TSchema): DynamicModule {
    const DatabaseProvider = {
      provide: DB_PROVIDER_TOKEN,
      useFactory: async () => {
        const client = new Client(options)

        await client.connect()

        return drizzle(client, { schema })
      },
    }

    return {
      module: DatabaseModule,
      providers: [DatabaseProvider],
      exports: [DatabaseProvider],
    }
  }
}
