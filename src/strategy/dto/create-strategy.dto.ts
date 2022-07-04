import { ApiProperty } from '@nestjs/swagger';
import { StrategyType, StrategyUnit } from 'src/constants';

export class CreateStrategyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: StrategyType;

  @ApiProperty()
  period: number;

  @ApiProperty()
  unit: StrategyUnit;
}
