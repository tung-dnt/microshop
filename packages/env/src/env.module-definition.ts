import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { EnvModuleOptions } from './interface/env-module-option.interface'

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<EnvModuleOptions>().build()
