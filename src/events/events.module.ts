import { Module } from '@nestjs/common';
import { TodoModule } from 'src/todo/todo.module';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [TodoModule],
  providers: [EventsGateway],
})
export class EventsModule {}
