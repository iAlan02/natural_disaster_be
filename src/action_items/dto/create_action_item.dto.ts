import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateActionItemDto {
  @IsNotEmpty({ message: 'Action item is required' })
  actionItem: string;

  @IsNotEmpty({ message: 'Due date is required' })
  @IsDateString()
  dueDate: string;

  @IsNotEmpty({ message: 'Priority is required' })
  priority: string;

  @IsNotEmpty({ message: 'Status is required' })
  status: string;
}
