import {
  Args,
  Mutation,
  Query,
  Resolver
} from '@nestjs/graphql'

import { CreateProductInput } from './dto/create-product.input'
import { Product } from './entities/product.entity'
import { ProductService } from './product.service'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) { }

  @Query(() => Product)
  healthCheck() {
    return "Quềnnn cha nàaaaaa"
  }

  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput)
  }
}
