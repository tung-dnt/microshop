import { DynamicModule, Module } from '@nestjs/common'
import { PrismaModuleOptions } from '../interfaces'

@Module({})
export class PrismaModule {
  static forRoot(options: PrismaModuleOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: PrismaModule,
      providers: options.providers,
      exports: options.providers
    }
  }
}