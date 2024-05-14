import { Injectable } from '@nestjs/common';
import { CreateGraphRouterInput } from './dto/create-graph-router.input';
import { UpdateGraphRouterInput } from './dto/update-graph-router.input';

@Injectable()
export class GraphRouterService {
  create(createGraphRouterInput: CreateGraphRouterInput) {
    return 'This action adds a new graphRouter';
  }

  findAll() {
    return `This action returns all graphRouter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphRouter`;
  }

  update(id: number, updateGraphRouterInput: UpdateGraphRouterInput) {
    return `This action updates a #${id} graphRouter`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphRouter`;
  }
}
