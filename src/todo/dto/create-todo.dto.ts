import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { TodoStatus } from 'src/constants';
import { User } from 'src/user/entities/user.entity';

export class CreateTodoDto {
  @ApiProperty()
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  status: TodoStatus;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  strategyId: number;

  user: User;
}
