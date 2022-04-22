import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoConfigurationDto } from './create-todo-configuration.dto';

export class UpdateTodoConfigurationDto extends PartialType(CreateTodoConfigurationDto) {
  id: number;
}
