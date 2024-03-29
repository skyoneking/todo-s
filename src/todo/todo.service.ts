import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoStatus } from 'src/constants';
import { StrategyService } from 'src/strategy/strategy.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private readonly strategyService: StrategyService,
    private readonly userService: UserService,
  ) {}

  async create(createTodoDto: CreateTodoDto, userId?: number) {
    const user = await this.userService.findOne(userId);
    createTodoDto.user = user;
    const { raw } = await this.todoRepository.insert(createTodoDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll(userId?: number) {
    return this.todoRepository.find({ order: { id: 'DESC' }, where: { user: userId } });
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

  async updateTodoStatus(startedTodoList: Todo[]) {
    const updatedTodoList = await Promise.all(
      startedTodoList.map((item) => this.strategyService.updateTodoItemStatusAndStartTime(item)),
    );

    this.todoRepository.save(updatedTodoList);
  }
}
