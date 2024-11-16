// login-auth.dto.ts
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { User } from '.../interfaces/user.interfaces.ts';

export class LoginAuthDto implements User {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @MaxLength(25)
  @IsNotEmpty()
  password: string;
}
