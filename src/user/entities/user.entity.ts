import { ApiProperty } from '@nestjs/swagger';
import { Strategy } from 'src/strategy/entities/strategy.entity';
import { Todo } from 'src/todo/entities/todo.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  username: string;

  @Column()
  @ApiProperty()
  password: string;

  @CreateDateColumn({ type: 'datetime' })
  @ApiProperty()
  createTime: number;

  @OneToMany(() => Todo, (todo) => todo.user)
  @ApiProperty()
  todos: Todo[];

  @OneToMany(() => Strategy, (strategy) => strategy.user)
  strategys: Strategy[];
}
