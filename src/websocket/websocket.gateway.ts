import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as moment from 'moment';
import type { Socket } from 'socket.io';
import { TodoStatus } from 'src/constants';
import { Todo } from 'src/todo/entities/todo.entity';
import { TodoService } from 'src/todo/todo.service';

interface WebsocketOptions {
  timerId: NodeJS.Timer;
  todoList: Todo[];
  socket: Socket;
  emitGap: number;
  queryTodoLostLoading: boolean;
  todoService: TodoService;
  updateTodoList: () => void;
  start: () => void;
}

export const websocketOptions: WebsocketOptions = {
  timerId: undefined,
  todoList: [],
  socket: undefined,
  emitGap: 1000 * 60,
  todoService: undefined,
  queryTodoLostLoading: false,
  updateTodoList: async () => {
    if (websocketOptions.todoService && websocketOptions.queryTodoLostLoading === false) {
      websocketOptions.queryTodoLostLoading = true;
      websocketOptions.todoList = await websocketOptions.todoService.findAll();
      websocketOptions.queryTodoLostLoading = false;
    }
  },
  start() {
    async function run() {
      const now = moment();
      await websocketOptions.updateTodoList();

      const startedTodoList = websocketOptions.todoList.filter((todo) => {
        const max = moment.max(now, moment(todo.startTime));
        return max === now && (todo.status === TodoStatus.notStart || todo.status === TodoStatus.starting);
      });
      websocketOptions.socket.emit('startedTodo', startedTodoList);

      websocketOptions.todoService.updateTodoStatus(startedTodoList);
    }
    run();
    clearInterval(websocketOptions.timerId);
    websocketOptions.timerId = setInterval(run, websocketOptions.emitGap);
  },
};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebsocketGateway {
  @WebSocketServer()
  socket: Socket;

  constructor(private readonly todoService: TodoService) {
    websocketOptions.todoService = todoService;
    websocketOptions.socket = this.socket;
    const getSocket = () => this.socket;
    setTimeout(() => {
      websocketOptions.socket = getSocket();
    });
  }

  // @SubscribeMessage('start')
  // async handleMessage(): Promise<void> {
  // }
}
