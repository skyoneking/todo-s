import { ApiProperty } from '@nestjs/swagger';
import { StrategyScope, StrategyType, StrategyUnit } from 'src/constants';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: StrategyScope,
    default: StrategyScope.custom,
  })
  scope: StrategyScope;

  @ManyToOne(() => User, (user) => user.strategys, { cascade: true })
  user: User;
}
