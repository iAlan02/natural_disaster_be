import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  username: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword()
  password: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsNotEmpty({ message: 'Date is required' })
  @IsString({ message: 'Date must be a string' })
  @IsDateString()
  date: string;
}
