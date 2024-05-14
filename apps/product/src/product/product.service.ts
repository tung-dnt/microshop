import { Injectable } from '@nestjs/common'

import type { CreateProductInput } from './dto/create-product.input'

@Injectable()
export class ProductService {
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product'
  }
}
