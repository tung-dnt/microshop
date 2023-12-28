import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { DatabaseModule } from '@shared/database'

import configuration from '../env'

import { UserController } from './controllers/user.controller'
import { ProvinceService } from './providers/province.service'
import { UserRepository } from './providers/user.repository'
import { UserService } from './providers/user.service'

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule.forRoot({
      user: 'root',
      host: 'user_db',
      database: 'microshop_users',
      password: 'password',
      port: 5432
    })
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    JwtService,
    UserRepository,
    ProvinceService,
  ],
})

export class UserModule {
}
