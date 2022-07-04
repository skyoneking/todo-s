import { Module } from '@nestjs/common';
import { TodoModule } from 'src/todo/todo.module';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [TodoModule],
  providers: [WebsocketGateway],
})
export class WebsocketModule {}
