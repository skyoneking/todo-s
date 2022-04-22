import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoConfigurationDto } from './dto/create-todo-configuration.dto';
import { UpdateTodoConfigurationDto } from './dto/update-todo-configuration.dto';
import { TodoConfiguration } from './entities/todo-configuration.entity';

@Injectable()
export class TodoConfigurationService {
  constructor(
    @InjectRepository(TodoConfiguration)
    private usersRepository: Repository<TodoConfiguration>,
  ) {}

  async create(createTodoConfigurationDto: CreateTodoConfigurationDto) {
    const {raw} = await this.usersRepository.insert(createTodoConfigurationDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(updateTodoConfigurationDto: UpdateTodoConfigurationDto) {
    const result = await this.usersRepository.update(updateTodoConfigurationDto.id, updateTodoConfigurationDto);
    return result.affected === 1;
  }

  async delete(id: number) {
    const result = await this.usersRepository.delete(id);
    return result.affected === 1;
  }
}
