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
import { EventsModule } from './events/events.module';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.SQL_HOST,
      port: process.env.SQL_PORT,
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      autoLoadEntities: true,
      // entities: [__dirname + '/../**/*.entity.ts'],
      synchronize: true,
    }),
    UsersModule,
    TodoModule,
    AuthModule,
    LoginModule,
    StrategyModule,
    EventsModule
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
