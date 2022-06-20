import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Strategy {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  launchTime: string;

  @ApiProperty()
  @Column()
  period: string;

  @CreateDateColumn({ type: 'datetime' })
  @ApiProperty()
  createTime: number;
}
