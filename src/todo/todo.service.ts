import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoStatus } from './constants';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const { raw } = await this.todoRepository.insert(createTodoDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.todoRepository.find({ order: { id: 'DESC' } });
  }

  findOne(id: number) {
    return this.todoRepository.findOne(id);
  }

  async update(updateTodoDto: UpdateTodoDto) {
    const result = await this.todoRepository.update(updateTodoDto.id, updateTodoDto);
    return result.affected === 1;
  }

  async delete(id: number) {
    const result = await this.todoRepository.delete(id);
    return result.affected === 1;
  }

  updateStartedTodo(startedTodoList: Todo[]) {
    startedTodoList.forEach((item) => {
      item.status = TodoStatus.COMPLETED;
    });
    this.todoRepository.save(startedTodoList);
  }
}
