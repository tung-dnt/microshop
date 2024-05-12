import { ApolloServer } from '@apollo/server'
import type { ApolloFederationDriverConfig } from '@nestjs/apollo'
import { ApolloFederationDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DB_PROVIDER_TOKEN } from '@shared/constants'
import { DatabaseModule } from '@shared/database'
import ProductDbConfig from '@shared/database/configs/product.config'
import * as ProductDbSchema from '@shared/database/schema/product'
import { buildSchema } from 'drizzle-graphql'
import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { ProductModule } from './product/product.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ProductModule,
    DatabaseModule.forRoot(ProductDbConfig.dbCredentials, ProductDbSchema),
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useFactory: async (dbClient: NodePgDatabase) => {
        const { schema } = buildSchema(dbClient)

        const server = new ApolloServer({ schema })

        return server
      },
      inject: [DB_PROVIDER_TOKEN],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
