import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEyeHealthDto } from './dto/create-eye-health.dto';
import { UpdateEyeHealthDto } from './dto/update-eye-health.dto';
import { EyeHealth } from './entities/eye-health.entity';

@Injectable()
export class EyeHealthService {
  constructor(
    @InjectRepository(EyeHealth)
    private usersRepository: Repository<EyeHealth>,
  ) {}

  async create(createEyeHealthDto: CreateEyeHealthDto) {
    const {raw} = await this.usersRepository.insert(createEyeHealthDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(updateEyeHealthDto: UpdateEyeHealthDto) {
    const result = await this.usersRepository.update(updateEyeHealthDto.id, updateEyeHealthDto);
    return result.affected === 1;
  }

  async delete(id: number) {
    const result = await this.usersRepository.delete(id);
    return result.affected === 1;
  }
}
