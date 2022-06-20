import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/user/user.module';
import { LoginController } from './login.controller';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [LoginController],
})
export class LoginModule {}
