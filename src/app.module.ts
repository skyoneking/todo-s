import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResDataInterceptor } from './interceptor/transformResData.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { config } from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginModule } from './login/login.module';
import { StrategyModule } from './strategy/strategy.module';
import { WebsocketModule } from './websocket/websocket.module';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: process.env.SQL_HOST,
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "todo",
      autoLoadEntities: true,
      // entities: [__dirname + '/../**/*.entity.ts'],
      synchronize: true,
    }),
    UsersModule,
    TodoModule,
    AuthModule,
    LoginModule,
    StrategyModule,
    WebsocketModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResDataInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
