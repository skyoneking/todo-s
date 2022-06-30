import { ApiProperty } from '@nestjs/swagger';
import { NameValueClass } from 'src/constants';
import { Strategy } from 'src/strategy/entities/strategy.entity';
import { Todo } from 'src/todo/entities/todo.entity';
import { User } from 'src/user/entities/user.entity';

export class TodoRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  data: Todo;
}
export class TodoListRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty({ isArray: true })
  data: Todo;
}
export class TodoTypeRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty({ isArray: true })
  data: NameValueClass;
}

export class UserRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  data: User;
}
export class UserListRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty({ isArray: true })
  data: User;
}

export class StrategyRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  data: Strategy;
}
export class StrategyListRes implements ResponseData {
  @ApiProperty()
  success: boolean;
  @ApiProperty({ isArray: true })
  data: Strategy;
}
