import { ApiProperty } from '@nestjs/swagger';

export class NameValueClass {
  @ApiProperty()
  name: string;
  @ApiProperty()
  value: string;
}

export enum TodoStatus {
  notStart = 'notStart',
  starting = 'starting',
  pause = 'pause',
  completed = 'completed',
}

export enum StrategyType {
  once = 'once',
  period = 'period',
}

export enum StrategyUnit {
  seconds = 'seconds',
  minutes = 'minutes',
  hours = 'hours',
  days = 'days',
  weeks = 'weeks',
  months = 'months',
  years = 'years',
}
export enum StrategyScope {
  global = 'global',
  custom = 'custom',
}
