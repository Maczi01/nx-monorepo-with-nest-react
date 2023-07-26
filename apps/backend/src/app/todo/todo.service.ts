import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return [
      {
        id: '1',
        title: 'Play a game',
        completed: false,
      },
      {
        id: '2',
        title: 'eat pizzza',
        completed: true,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
