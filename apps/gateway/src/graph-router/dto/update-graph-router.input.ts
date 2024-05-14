import { CreateGraphRouterInput } from './create-graph-router.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphRouterInput extends PartialType(CreateGraphRouterInput) {
  @Field(() => Int)
  id: number;
}
