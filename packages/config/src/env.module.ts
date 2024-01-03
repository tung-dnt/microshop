import type { DynamicModule } from '@nestjs/common'
import {
  Global,
  Module,
  NotImplementedException
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import type { Environment } from '@shared/types'
import { destr } from 'destr'
import * as fs from 'fs'
import merge from 'lodash/merge'
import * as path from 'path'

import { ConfigurableModuleClass } from './env.module-definition'
import { EnvService } from './env.service'

@Global()
@Module({})
export class EnvModule extends ConfigurableModuleClass {
  public static register(env: Environment): DynamicModule {
    return {
      module: EnvModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          load: [() => this.load(env)],
        }),
      ],
      // providers and exports have to be re/defined here because we're overriding the register method
      providers: [EnvService],
      exports: [EnvService],
    }
  }

  /**
   * delibrate override of parent method to avoid accidentally calling it,
   * this method is meant to never be used
   * @throws {NotImplementedException}
   */
  public static registerAsync(): never {
    throw new NotImplementedException()
  }

  private static load(env?: Environment) {
    let config: Record<string, unknown> = {}
    const [root, extension] = ['_env', '.json']
    const configs = [
      'global',
      env ? `global.${env}` : false,
      'local',
      env ? `local.${env}` : false,
    ]

    const configFilePaths = configs
      .filter(Boolean)
      .map(String)
      .map((name) =>
        path.resolve(path.join(process.cwd(), root), name + extension)
      )
      .filter((path) => fs.existsSync(path))

    const readJson = (filePath: string) => {
      return destr(fs.readFileSync(filePath, 'utf-8')) ?? {}
    }

    for (const configFilePath of configFilePaths)
      config = merge(config, readJson(configFilePath))

    return config
  }
}
