import { ApiProperty } from '@nestjs/swagger';
import { StrategyType, StrategyUnit } from 'src/constants';
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
  @Column({
    type: 'enum',
    enum: StrategyType,
    default: StrategyType.once,
  })
  type: StrategyType;

  @ApiProperty()
  @Column({ default: 0 })
  period: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: StrategyUnit,
    default: StrategyUnit.days,
  })
  unit: StrategyUnit;

  @CreateDateColumn({ type: 'datetime' })
  @ApiProperty()
  createTime: number;
}
