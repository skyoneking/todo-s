import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoConfigurationService } from 'src/todo-configuration/todo-configuration.service';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private usersRepository: Repository<Todo>,
    private todoConfigurationService: TodoConfigurationService
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const {todoConfigurationId} = createTodoDto
    const todoConfiguration = await this.todoConfigurationService.findOne(todoConfigurationId)

    const todo = await this.usersRepository.create(createTodoDto)
    todo.todoConfiguration = todoConfiguration
    
    const {raw} = await this.usersRepository.insert(todo);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.usersRepository.find({relations: ['todoConfiguration']});
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(updateTodoDto: UpdateTodoDto) {
    const result = await this.usersRepository.update(updateTodoDto.id, updateTodoDto);
    return result.affected === 1;
  }

  async delete(id: number) {
    const result = await this.usersRepository.delete(id);
    return result.affected === 1;
  }
}
