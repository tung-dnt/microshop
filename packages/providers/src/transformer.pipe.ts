/* eslint-disable @typescript-eslint/ban-types */
import type { ArgumentMetadata,PipeTransform } from '@nestjs/common'
import { BadRequestException,Injectable } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class TransformerPipe implements PipeTransform {
  async transform(value: unknown, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype))
      return value

    const object = plainToClass(metatype, value)
    const errors = await validate(object)

    if (errors.length > 0)
      throw new BadRequestException('Validation failed')

    return value
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object]

    return !types.includes(metatype)
  }
}