import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'hhh' })
  username: string;

  @ApiProperty({ example: '1234' })
  password: string;
}
