import { Injectable } from '@nestjs/common';
import { ActionItems } from './action_items.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateActionItemDto } from './dto/create_action_item.dto';
import { UpdateActionItemDto } from 'src/action_items/dto/update_action_item.dto';

@Injectable()
export class ActionItemsService {
  constructor(
    @InjectRepository(ActionItems)
    private readonly actionItemsRepository: Repository<ActionItems>,
  ) {}

  async create(createActionItemDto: CreateActionItemDto): Promise<ActionItems> {
    const actionItem = this.actionItemsRepository.create(createActionItemDto);
    return await this.actionItemsRepository.save(actionItem);
  }

  async findAll(): Promise<ActionItems[]> {
    return this.actionItemsRepository.find();
  }

  async findOne(id: number): Promise<ActionItems> {
    const actionItem = await this.actionItemsRepository.findOne({
      where: { id: id },
    });
    if (!actionItem) {
      throw new Error('Action item not found');
    }
    return actionItem;
  }

  async update(
    id: number,
    updateActionItemDto: UpdateActionItemDto,
  ): Promise<ActionItems> {
    const actionItem = await this.findOne(id);
    this.actionItemsRepository.merge(actionItem, updateActionItemDto);
    return await this.actionItemsRepository.save(actionItem);
  }

  async remove(id: number) {
    const result = await this.actionItemsRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Action item not found');
    }
    return { message: 'Action item successfully deleted' };
  }
}
