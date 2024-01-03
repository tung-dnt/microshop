import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { EnvModule } from '@shared/config'
import { DatabaseModule } from '@shared/database'
import UserDbConfig from '@shared/database/configs/user.config'
import { AuthGuard } from '@shared/providers'
import { Environment } from '@shared/types'

import { ProvinceService } from '../province/province.service'

import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

@Module({
  imports: [
    HttpModule,
    DatabaseModule.forRoot(UserDbConfig.dbCredentials),
    EnvModule.register(process.env.NODE_ENV as Environment ?? Environment.Development)
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    ProvinceService,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
})

export class UserModule {
}
