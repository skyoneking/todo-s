import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/auth.decorator';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('/api/login')
@ApiTags('login')
@ApiBearerAuth()
export class LoginController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  @Public()
  @ApiBody({ type: LoginUserDto })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
