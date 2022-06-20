import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserListRes, UserRes } from 'src/utils/swaggerResClass';

@Controller('/api/user')
@ApiTags('user')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: UserListRes })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/byName')
  @ApiQuery({ name: 'username' })
  @ApiResponse({ status: 200, type: UserRes })
  findOneByName(@Query('username') username: string) {
    return this.usersService.findOneByName(username);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status: 200, type: UserRes })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put()
  @ApiBody({ type: UpdateUserDto })
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
