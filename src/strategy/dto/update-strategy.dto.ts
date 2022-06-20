import { ApiProperty } from '@nestjs/swagger';

export class UpdateStrategyDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  launchTime?: string;

  @ApiProperty()
  period?: string;
}
