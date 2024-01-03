import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvService {
  constructor(private readonly config: ConfigService) {}

  get(name: string) {
    return this.config.get(name)
  }
}
