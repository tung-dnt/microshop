import { ApolloFederationDriver, type ApolloFederationDriverConfig } from '@nestjs/apollo'
import { Inject, Injectable } from '@nestjs/common'
import { GqlOptionsFactory } from '@nestjs/graphql'
import { DB_PROVIDER_TOKEN } from '@shared/constants'
import type { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { Environment } from '@shared/types'
import { buildSchema } from 'drizzle-graphql'

const VERSION_2 = 2

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(
    @Inject(DB_PROVIDER_TOKEN) private readonly dbClient: NodePgDatabase,
  ) { }

  async createGqlOptions(): Promise<ApolloFederationDriverConfig> {
    const isProduction = process.env.NODE_ENV as Environment === Environment.Production

    const { schema } = buildSchema(this.dbClient)

    return {
      driver: ApolloFederationDriver,
      introspection: isProduction,
      playground: !isProduction,
      autoTransformHttpErrors: true,
      autoSchemaFile: {
        federation: VERSION_2
      },
      schema,
    };
  }
}
