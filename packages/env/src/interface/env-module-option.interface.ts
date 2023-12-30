import type { ClassConstructor } from 'class-transformer'

export interface EnvModuleOptions {
  class: ClassConstructor<object>;
  env?: string;
}
