import { Test, TestingModule } from '@nestjs/testing';
import { GraphRouterService } from './graph-router.service';

describe('GraphRouterService', () => {
  let service: GraphRouterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphRouterService],
    }).compile();

    service = module.get<GraphRouterService>(GraphRouterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
