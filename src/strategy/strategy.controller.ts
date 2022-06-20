import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StrategyService } from './strategy.service';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { UpdateStrategyDto } from './dto/update-strategy.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StrategyListRes, StrategyRes } from 'src/utils/swaggerResClass';

@Controller('/api/strategy')
@ApiTags('strategy')
export class StrategyController {
  constructor(private readonly strategyService: StrategyService) {}

  @Post()
  create(@Body() createStrategyDto: CreateStrategyDto) {
    return this.strategyService.create(createStrategyDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: StrategyListRes })
  findAll() {
    return this.strategyService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, type: StrategyRes })
  findOne(@Param('id') id: string) {
    return this.strategyService.findOne(+id);
  }

  @Patch()
  update(@Body() updateStrategyDto: UpdateStrategyDto) {
    return this.strategyService.update(updateStrategyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strategyService.remove(+id);
  }
}
