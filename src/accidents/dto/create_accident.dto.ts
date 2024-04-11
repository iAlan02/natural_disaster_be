import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateAccidentDto {
  @IsNotEmpty({ message: 'Accident type is required' })
  @IsString({ message: 'Accident type must be a string' })
  accidentType: string;

  @IsNotEmpty({ message: 'Location is required' })
  @IsString({ message: 'Location must be a string' })
  location: string;

  @IsNotEmpty({ message: 'Date is required' })
  @IsString({ message: 'Date must be a string' })
  @IsDateString()
  date: string;
}
