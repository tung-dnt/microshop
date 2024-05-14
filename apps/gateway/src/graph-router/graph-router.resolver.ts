import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphRouterService } from './graph-router.service';
import { GraphRouter } from './entities/graph-router.entity';
import { CreateGraphRouterInput } from './dto/create-graph-router.input';
import { UpdateGraphRouterInput } from './dto/update-graph-router.input';

@Resolver(() => GraphRouter)
export class GraphRouterResolver {
  constructor(private readonly graphRouterService: GraphRouterService) {}

  @Mutation(() => GraphRouter)
  createGraphRouter(@Args('createGraphRouterInput') createGraphRouterInput: CreateGraphRouterInput) {
    return this.graphRouterService.create(createGraphRouterInput);
  }

  @Query(() => [GraphRouter], { name: 'graphRouter' })
  findAll() {
    return this.graphRouterService.findAll();
  }

  @Query(() => GraphRouter, { name: 'graphRouter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphRouterService.findOne(id);
  }

  @Mutation(() => GraphRouter)
  updateGraphRouter(@Args('updateGraphRouterInput') updateGraphRouterInput: UpdateGraphRouterInput) {
    return this.graphRouterService.update(updateGraphRouterInput.id, updateGraphRouterInput);
  }

  @Mutation(() => GraphRouter)
  removeGraphRouter(@Args('id', { type: () => Int }) id: number) {
    return this.graphRouterService.remove(id);
  }
}
