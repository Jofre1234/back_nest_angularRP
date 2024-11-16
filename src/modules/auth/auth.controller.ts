import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from 'src/modules/auth/auth.controller.ts';

@Controller('auth')
export class AuthController {
  @Post('register')
  registerUser(@Body() userObj: RegisterAuthDto) {
    return { message: 'User registered successfully', user: userObj };
  }
}
