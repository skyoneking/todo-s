import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as moment from 'moment';
import type { Socket } from 'socket.io';
import { TodoStatus } from 'src/todo/constants';
import { Todo } from 'src/todo/entities/todo.entity';
import { TodoService } from 'src/todo/todo.service';

interface Events {
  timerId: NodeJS.Timer;
  todoList: Todo[];
  socket: Socket;
  emitGap: number;
  queryTodoLostLoading: boolean;
  todoService: TodoService;
  updateTodoList: () => void;
  start: () => void;
}

export const events: Events = {
  timerId: undefined,
  todoList: [],
  socket: undefined,
  emitGap: 1000 * 59,
  todoService: undefined,
  queryTodoLostLoading: false,
  updateTodoList: async () => {
    if (events.todoService && events.queryTodoLostLoading === false) {
      events.queryTodoLostLoading = true;
      events.todoList = await events.todoService.findAll();
      events.queryTodoLostLoading = false;
    }
  },
  start() {
    async function run() {
      const now = moment();
      await events.updateTodoList();

      const startedTodoList = events.todoList.filter((todo) => {
        const max = moment.max(now, moment(todo.startTime));
        return max === now && todo.status === TodoStatus.NOT_START;
      });
      events.socket.emit('startedTodo', startedTodoList);

      events.todoService.updateStartedTodo(startedTodoList);
    }
    run();
    clearInterval(events.timerId);
    events.timerId = setInterval(run, events.emitGap);
  },
};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  socket: Socket;

  constructor(private readonly todoService: TodoService) {
    events.todoService = todoService;
    events.socket = this.socket;
    const getSocket = () => this.socket;
    setTimeout(() => {
      events.socket = getSocket();
    });
  }

  // @SubscribeMessage('start')
  // async handleMessage(): Promise<void> {
  // }
}
