import type { DynamicModule } from '@nestjs/common'
import { Global,Module } from '@nestjs/common'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

import { DB_PROVIDER_TOKEN } from './constants'

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(options: {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
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
      providers: [ DatabaseProvider ],
      exports: [ DatabaseProvider ],
    }
  }
}
