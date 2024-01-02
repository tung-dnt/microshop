import type { DynamicModule } from '@nestjs/common'
import {
  Global,
  Module,
  NotImplementedException
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import type { ClassConstructor } from 'class-transformer'
import { plainToClass } from 'class-transformer'
import { validateSync } from 'class-validator'
import { destr } from 'destr'
import * as fs from 'fs'
import { merge } from 'lodash'
import * as path from 'path'

import type { OPTIONS_TYPE } from './env.module-definition'
import { ConfigurableModuleClass } from './env.module-definition'
import { EnvService } from './env.service'

@Global()
@Module({})
export class EnvModule extends ConfigurableModuleClass {
  public static register(options: typeof OPTIONS_TYPE): DynamicModule {
    return {
      module: EnvModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          load: [
            () => {
              return this.validate(options.class, this.load(options.env))
            },
          ],
        }),
      ],
      // providers and exports have to be re/defined here because we're overriding the register method
      providers: [ EnvService ],
      exports: [ EnvService ],
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

  private static load(env?: string) {
    let config: Record<string, unknown> = {}
    const [ root, extension ] = [ 'env', '.json' ]
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

  private static validate<T extends object>(
    klass: ClassConstructor<T>,
    config: T
  ) {
    const validatedConfig = plainToClass(klass, config, {
      enableImplicitConversion: true,
    })
    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    })

    if (errors.length > 0) throw new Error(errors.toString())

    return validatedConfig
  }
}
