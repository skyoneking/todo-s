import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResDataInterceptor } from './interceptor/transformResData.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { EyeHealthModule } from './eye-health/eye-health.module';
import { TodoConfigurationModule } from './todo-configuration/todo-configuration.module';
import { EyeHealthConfigurationModule } from './eye-health-configuration/eye-health-configuration.module';
import { config } from 'dotenv';

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
      synchronize: true,
    }),
    UsersModule,
    TodoModule,
    EyeHealthModule,
    TodoConfigurationModule,
    EyeHealthConfigurationModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResDataInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
