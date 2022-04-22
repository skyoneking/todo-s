import { Module } from '@nestjs/common';
import { EyeHealthService } from './eye-health.service';
import { EyeHealthController } from './eye-health.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EyeHealth } from './entities/eye-health.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EyeHealth])],
  controllers: [EyeHealthController],
  providers: [EyeHealthService]
})
export class EyeHealthModule {}
