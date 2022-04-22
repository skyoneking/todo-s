import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EyeHealthConfigurationService } from './eye-health-configuration.service';
import { CreateEyeHealthConfigurationDto } from './dto/create-eye-health-configuration.dto';
import { UpdateEyeHealthConfigurationDto } from './dto/update-eye-health-configuration.dto';

@Controller('/api/eyeHealthConfiguration')
export class EyeHealthConfigurationController {
  constructor(private readonly eyeHealthConfigurationService: EyeHealthConfigurationService) {}

  @Post()
  create(@Body() createEyeHealthConfigurationDto: CreateEyeHealthConfigurationDto) {
    return this.eyeHealthConfigurationService.create(createEyeHealthConfigurationDto);
  }

  @Get()
  findAll() {
    return this.eyeHealthConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eyeHealthConfigurationService.findOne(+id);
  }

  @Patch()
  update(@Body() updateEyeHealthConfigurationDto: UpdateEyeHealthConfigurationDto) {
    return this.eyeHealthConfigurationService.update(updateEyeHealthConfigurationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eyeHealthConfigurationService.delete(+id);
  }
}
