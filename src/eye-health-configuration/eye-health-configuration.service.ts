import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEyeHealthConfigurationDto } from './dto/create-eye-health-configuration.dto';
import { UpdateEyeHealthConfigurationDto } from './dto/update-eye-health-configuration.dto';
import { EyeHealthConfiguration } from './entities/eye-health-configuration.entity';

@Injectable()
export class EyeHealthConfigurationService {
  constructor(
    @InjectRepository(EyeHealthConfiguration)
    private usersRepository: Repository<EyeHealthConfiguration>,
  ) {}

  async create(createEyeHealthConfigurationDto: CreateEyeHealthConfigurationDto) {
    const {raw} = await this.usersRepository.insert(createEyeHealthConfigurationDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(updateEyeHealthConfigurationDto: UpdateEyeHealthConfigurationDto) {
    const result = await this.usersRepository.update(
      updateEyeHealthConfigurationDto.id,
      updateEyeHealthConfigurationDto,
    );
    return result.affected === 1;
  }

  async delete(id: number) {
    const result = await this.usersRepository.delete(id);
    return result.affected === 1;
  }
}
