import { ApiProperty } from '@nestjs/swagger';

export class CreateStrategyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  launchTime: string;

  @ApiProperty()
  period: string;
}
