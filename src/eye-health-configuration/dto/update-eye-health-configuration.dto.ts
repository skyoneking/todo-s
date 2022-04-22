import { PartialType } from '@nestjs/mapped-types';
import { CreateEyeHealthConfigurationDto } from './create-eye-health-configuration.dto';

export class UpdateEyeHealthConfigurationDto extends PartialType(CreateEyeHealthConfigurationDto) {
  id: number;
}
