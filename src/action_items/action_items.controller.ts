import { Controller } from '@nestjs/common';
import { ActionItemsService } from './action_items.service';

@Controller('action_items')
export class ActionItemsController {
  constructor(private readonly actionItemsService: ActionItemsService) {}
}
