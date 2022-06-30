import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TodoStatus } from '../constants';

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
  status: TodoStatus;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  strategyId: number;
}
