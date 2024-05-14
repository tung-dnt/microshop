import type { ApolloFederationDriverConfig } from '@nestjs/apollo'
import { ApolloFederationDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DatabaseModule } from '@shared/database'
import ProductDbConfig from '@shared/database/configs/product.config'
import * as ProductDbSchema from '@shared/database/schema/product'
import { GqlConfigService } from '@shared/providers'
import { ProductModule } from './product/product.module'

@Module({
  imports: [
    ProductModule,
    DatabaseModule.forRoot(ProductDbConfig.dbCredentials, ProductDbSchema),
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useClass: GqlConfigService,
    }),
  ],
  providers: []
})
export class AppModule { }
