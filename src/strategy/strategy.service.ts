import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { UpdateStrategyDto } from './dto/update-strategy.dto';
import { Strategy } from './entities/strategy.entity';

@Injectable()
export class StrategyService {
  constructor(
    @InjectRepository(Strategy)
    private strategyRepository: Repository<Strategy>,
  ) {}

  async create(createStrategyDto: CreateStrategyDto) {
    const { raw } = await this.strategyRepository.insert(createStrategyDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.strategyRepository.find();
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
}
