import { ApiProperty } from '@nestjs/swagger';

export class NameValueClass {
  @ApiProperty()
  name: string;
  @ApiProperty()
  value: string;
}
