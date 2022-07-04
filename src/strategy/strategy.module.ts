import { Module } from '@nestjs/common';
import { StrategyService } from './strategy.service';
import { StrategyController } from './strategy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strategy } from './entities/strategy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Strategy])],
  controllers: [StrategyController],
  providers: [StrategyService],
  exports: [StrategyService]
})
export class StrategyModule {}
