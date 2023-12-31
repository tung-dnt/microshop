import { HttpModule, HttpService } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD, Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { DatabaseModule } from '@shared/database'
import UserDbConfig from '@shared/database/configs/user.config'
import { EnvModule } from '@shared/env'
import { AuthGuard } from '@shared/providers'
import { Env } from 'types/env'

import configuration from '../env'

import { UserController } from './controllers/user.controller'
import { ProvinceService } from './providers/province.service'
import { UserRepository } from './providers/user.repository'
import { UserService } from './providers/user.service'

@Module({
  imports: [
    HttpModule,
    DatabaseModule.forRoot(UserDbConfig.dbCredentials),
    EnvModule.register({
      env: process.env.NODE_ENV,
      class: Env
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ configuration ],
    }),
  ],
  controllers: [ UserController ],
  providers: [
    UserService,
    UserRepository,
    ProvinceService,
    {
      provide: APP_GUARD,
      useFactory: () => {
        const url = 'http://localhost:5000/api/v1/users/serialize'

        return new AuthGuard(
          new HttpService(),
          new Reflector(),
          new JwtService(),
          url
        )
      },
    }
  ],
})

export class UserModule {
}
