import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoConfigurationModule } from 'src/todo-configuration/todo-configuration.module';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), TodoConfigurationModule],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
