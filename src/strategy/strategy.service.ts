import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { StrategyScope, StrategyType, TodoStatus } from 'src/constants';
import { Todo } from 'src/todo/entities/todo.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { UpdateStrategyDto } from './dto/update-strategy.dto';
import { Strategy } from './entities/strategy.entity';

@Injectable()
export class StrategyService {
  constructor(
    @InjectRepository(Strategy)
    private strategyRepository: Repository<Strategy>,
    private readonly userService: UserService,
  ) {}

  async create(createStrategyDto: CreateStrategyDto, userId?: number) {
    const user = await this.userService.findOne(userId);
    createStrategyDto.user = user
    const { raw } = await this.strategyRepository.insert(createStrategyDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  async findAll(userId?: number) {
    const user = await this.userService.findOne(userId);
    const curUserStrategys = user.strategys.map((item) => item.id);
    const strategys = await this.strategyRepository
      .createQueryBuilder('strategy')
      .where(curUserStrategys.length ? `strategy.id in (${curUserStrategys.join()})` : '')
      .orWhere('strategy.scope = :scope', { scope: StrategyScope.global })
      .getMany();
    return strategys;
  }

  findOne(id: number) {
    return this.strategyRepository.findOne(id);
  }

  async update(updateStrategyDto: UpdateStrategyDto) {
    const result = await this.strategyRepository.update(updateStrategyDto.id, updateStrategyDto);
    return result.affected === 1;
  }

  async remove(id: number) {
    const result = await this.strategyRepository.delete(id);
    return result.affected === 1;
  }

  async computeNextStartTime(curStartTime: string, strategy: Strategy) {
    let result = curStartTime;

    if (strategy.type === StrategyType.period) {
      result = moment(result)
        .add(strategy.period, strategy.unit as any)
        .format();
    }

    return result;
  }

  async updateTodoItemStatusAndStartTime(todo: Todo) {
    const strategy = await this.strategyRepository.findOne(todo.strategyId);

    if (strategy.type === StrategyType.once) {
      todo.status = TodoStatus.completed;
      return todo;
    }

    todo.status = TodoStatus.starting;
    todo.startTime = await this.computeNextStartTime(todo.startTime, strategy);

    return todo;
  }
}
