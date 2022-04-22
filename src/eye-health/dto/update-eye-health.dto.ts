import { PartialType } from '@nestjs/mapped-types';
import { CreateEyeHealthDto } from './create-eye-health.dto';

export class UpdateEyeHealthDto extends PartialType(CreateEyeHealthDto) {
  id: number;
}
