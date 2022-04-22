import { Module } from '@nestjs/common';
import { TodoConfigurationService } from './todo-configuration.service';
import { TodoConfigurationController } from './todo-configuration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoConfiguration } from './entities/todo-configuration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoConfiguration])],
  controllers: [TodoConfigurationController],
  providers: [TodoConfigurationService],
  exports: [TodoConfigurationService]
})
export class TodoConfigurationModule {}
