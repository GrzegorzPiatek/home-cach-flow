import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutineModule } from './routine/routine.module';

@Module({
  imports: [RoutineModule],
})
export class AppModule {}
