import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDisasterDto {
  @IsNotEmpty({ message: 'Disaster type is required' })
  @IsString({ message: 'Disaster type must be a string' })
  disasterType: string;

  @IsNotEmpty({ message: 'Location is required' })
  @IsString({ message: 'Location must be a string' })
  location: string;

  @IsNotEmpty({ message: 'Date is required' })
  @IsString({ message: 'Date must be a string' })
  date: string;
}
