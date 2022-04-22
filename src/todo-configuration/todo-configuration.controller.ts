import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoConfigurationService } from './todo-configuration.service';
import { CreateTodoConfigurationDto } from './dto/create-todo-configuration.dto';
import { UpdateTodoConfigurationDto } from './dto/update-todo-configuration.dto';

@Controller('/api/todoConfiguration')
export class TodoConfigurationController {
  constructor(private readonly todoConfigurationService: TodoConfigurationService) {}

  @Post()
  create(@Body() createTodoConfigurationDto: CreateTodoConfigurationDto) {
    return this.todoConfigurationService.create(createTodoConfigurationDto);
  }

  @Get()
  findAll() {
    return this.todoConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoConfigurationService.findOne(+id);
  }

  @Patch()
  update(@Body() updateTodoConfigurationDto: UpdateTodoConfigurationDto) {
    return this.todoConfigurationService.update(updateTodoConfigurationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoConfigurationService.delete(+id);
  }
}
