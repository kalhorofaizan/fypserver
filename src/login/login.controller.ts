import {Controller, Get, Post, Render} from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @Render('Login')
  login(){

  }

  @Post()
  signup(){

  }

}
