import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAccidentDto {
  @IsNotEmpty({ message: 'Accident type is required' })
  @IsString({ message: 'Accident type must be a string' })
  accidentType: string;

  @IsOptional()
  @IsString({ message: 'Location must be a string' })
  location: string;

  @IsOptional()
  @IsString({ message: 'Date must be a string' })
  date: string;
}
