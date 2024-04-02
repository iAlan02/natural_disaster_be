import { Module } from '@nestjs/common';
import { DisastersService } from './disasters.service';
import { DisastersController } from './disasters.controller';
import { Disasters } from './disasters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Disasters])],
  providers: [DisastersService],
  controllers: [DisastersController],
})
export class DisastersModule {}
