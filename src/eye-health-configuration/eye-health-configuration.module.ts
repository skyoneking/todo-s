import { Module } from '@nestjs/common';
import { EyeHealthConfigurationService } from './eye-health-configuration.service';
import { EyeHealthConfigurationController } from './eye-health-configuration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EyeHealthConfiguration } from './entities/eye-health-configuration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EyeHealthConfiguration])],
  controllers: [EyeHealthConfigurationController],
  providers: [EyeHealthConfigurationService]
})
export class EyeHealthConfigurationModule {}
