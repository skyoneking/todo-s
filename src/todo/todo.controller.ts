import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TodoListRes, TodoRes } from 'src/utils/swaggerResClass';

@Controller('/api/todo')
@ApiTags('todo')
@ApiBearerAuth()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiBody({ type: CreateTodoDto })
  @ApiOperation({ summary: 'create' })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'findOne' })
  @ApiResponse({
    status: 200,
    type: TodoRes,
  })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Get()
  @ApiOperation({ summary: 'findAll' })
  @ApiResponse({ status: 200, type: TodoListRes })
  findAll() {
    return this.todoService.findAll();
  }

  @Put()
  @ApiBody({ type: UpdateTodoDto })
  @ApiOperation({ summary: 'update' })
  async update(@Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(updateTodoDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'delete' })
  delete(@Param('id') id: string) {
    return this.todoService.delete(+id);
  }
}
