import { Resolver } from '@nestjs/graphql'

import { GraphRouterService } from './graph-router.service'

@Resolver()
export class GraphRouterResolver {
  constructor(private readonly graphRouterService: GraphRouterService) { }
}
