import { Test, TestingModule } from '@nestjs/testing';
import { GraphRouterResolver } from './graph-router.resolver';
import { GraphRouterService } from './graph-router.service';

describe('GraphRouterResolver', () => {
  let resolver: GraphRouterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphRouterResolver, GraphRouterService],
    }).compile();

    resolver = module.get<GraphRouterResolver>(GraphRouterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
