import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionItems } from './action_items.entity';
import { ActionItemsService } from './action_items.service';
import { ActionItemsController } from './action_items.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActionItems])],
  providers: [ActionItemsService],
  controllers: [ActionItemsController],
})
export class ActionItemsModule {}
