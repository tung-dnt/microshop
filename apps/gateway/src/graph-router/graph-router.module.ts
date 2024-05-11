import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway'
import type { ApolloGatewayDriverConfig } from '@nestjs/apollo'
import { ApolloGatewayDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { RouterSubgraph } from 'src/utils/subgraph.util'

import { GraphRouterResolver } from './graph-router.resolver'
import { GraphRouterService } from './graph-router.service'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: { playground: true },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: RouterSubgraph.get(['product']),
        }),
        buildService({ url }) {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request?.http?.headers?.set(
                'user',
                context?.user ? JSON.stringify(context.user) : '',
              )
            },
          })
        },
      },
    }),
  ],
  providers: [GraphRouterResolver, GraphRouterService],
})
export class GraphRouterModule { }
