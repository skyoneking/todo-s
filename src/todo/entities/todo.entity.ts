import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { TodoStatus } from '../constants';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  type: string;

  @Column({
    type: 'enum',
    enum: TodoStatus,
    default: TodoStatus.NOT_START,
  })
  @ApiProperty()
  status: TodoStatus;

  @Column()
  @ApiProperty()
  startTime: string;

  @Column()
  @ApiProperty()
  strategyId: number;

  @CreateDateColumn({ type: 'datetime' })
  @ApiProperty()
  createTime: number;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
