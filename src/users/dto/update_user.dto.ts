import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  username: string;

  @IsOptional()
  @IsStrongPassword()
  password: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;
}
