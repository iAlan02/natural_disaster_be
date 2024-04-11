import { Module } from '@nestjs/common';
import { AccidentsService } from './accidents.service';
import { AccidentsController } from './accidents.controller';
import { Accidents } from './accidents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Accidents])],
  providers: [AccidentsService],
  controllers: [AccidentsController],
})
export class AccidentsModule {}
