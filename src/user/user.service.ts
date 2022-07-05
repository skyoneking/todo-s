import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { raw } = await this.usersRepository.insert(createUserDto);
    return raw.affectedRows === 1 ? raw.insertId : null;
  }

  findAll() {
    return this.usersRepository.find({ order: { id: 'DESC' }, relations: ['todos', 'strategys'] });
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id, { relations: ['todos', 'strategys'] });
  }

  findOneByName(username: string) {
    return this.usersRepository.findOne({ where: { username } });
  }

  async update(updateUserDto: UpdateUserDto) {
    const result = await this.usersRepository.update(updateUserDto.id, updateUserDto);
    return result.affected === 1;
  }

  async delete(id: number) {
    const result = await this.usersRepository.delete(id);
    return result.affected === 1;
  }
}
