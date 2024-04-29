import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ActionItemsService } from './action_items.service';
import { ActionItems } from './action_items.entity';
import { CreateActionItemDto } from './dto/create_action_item.dto';
import { UpdateActionItemDto } from './dto/update_action_item.dto';

@Controller('action_items')
export class ActionItemsController {
  constructor(private readonly actionItemsService: ActionItemsService) {}
  @Post()
  create(
    @Body() createActionItemDto: CreateActionItemDto,
  ): Promise<ActionItems> {
    return this.actionItemsService.create(createActionItemDto);
  }

  @Get()
  findAll(): Promise<ActionItems[]> {
    return this.actionItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ActionItems> {
    return this.actionItemsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateActionItemDto: UpdateActionItemDto,
  ): Promise<ActionItems> {
    return this.actionItemsService.update(+id, updateActionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionItemsService.remove(+id);
  }
}
