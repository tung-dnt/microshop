import { Module } from '@nestjs/common'
import { EnvModule } from '@shared/config'
import { Environment } from '@shared/types'

import { GraphRouterModule } from './graph-router/graph-router.module'

@Module({
  imports: [
    GraphRouterModule,
    EnvModule.register(process.env.NODE_ENV as Environment ?? Environment.Development),
  ]
})
export class AppModule { }
