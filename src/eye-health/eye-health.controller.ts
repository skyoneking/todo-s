import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EyeHealthService } from './eye-health.service';
import { CreateEyeHealthDto } from './dto/create-eye-health.dto';
import { UpdateEyeHealthDto } from './dto/update-eye-health.dto';

@Controller('/api/eyeHealth')
export class EyeHealthController {
  constructor(private readonly eyeHealthService: EyeHealthService) {}

  @Post()
  create(@Body() createEyeHealthDto: CreateEyeHealthDto) {
    return this.eyeHealthService.create(createEyeHealthDto);
  }

  @Get()
  findAll() {
    return this.eyeHealthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eyeHealthService.findOne(+id);
  }

  @Patch()
  update(@Body() updateEyeHealthDto: UpdateEyeHealthDto) {
    return this.eyeHealthService.update(updateEyeHealthDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eyeHealthService.delete(+id);
  }
}
