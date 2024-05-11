import { Module } from '@nestjs/common'

import { GraphRouterModule } from './graph-router/graph-router.module'

@Module({
  imports: [GraphRouterModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
