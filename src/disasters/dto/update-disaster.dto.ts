import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDisasterDto {
  @IsNotEmpty({ message: 'Disaster type is required' })
  @IsString({ message: 'Disaster type must be a string' })
  disasterType: string;

  @IsOptional()
  @IsString({ message: 'Location must be a string' })
  location: string;

  @IsOptional()
  @IsString({ message: 'Date must be a string' })
  date: string;
}
