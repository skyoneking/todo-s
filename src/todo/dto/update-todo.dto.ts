import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty()
  @IsInt()
  id: number;

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
