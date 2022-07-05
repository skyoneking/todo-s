import { ApiProperty } from '@nestjs/swagger';
import { StrategyScope, StrategyType, StrategyUnit } from 'src/constants';
import { User } from 'src/user/entities/user.entity';

export class CreateStrategyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: StrategyType;

  @ApiProperty()
  period: number;

  @ApiProperty()
  unit: StrategyUnit;

  @ApiProperty()
  scope: StrategyScope;

  user: User;
}
