import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateActionItemDto {
  @IsOptional()
  @IsString({ message: 'Action item must be a string' })
  actionItem: string;

  @IsOptional()
  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsString({ message: 'Priority must be a string' })
  priority: string;

  @IsOptional()
  @IsString({ message: 'Status must be a string' })
  status: string;
}
