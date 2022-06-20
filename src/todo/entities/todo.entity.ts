import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

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

  @Column()
  @ApiProperty()
  status: string;

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
