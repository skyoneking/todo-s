import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty()
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  strategyId: number;
}
