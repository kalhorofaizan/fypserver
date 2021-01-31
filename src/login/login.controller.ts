import { Controller, Get, Render, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}



  @Get()
  @Render('Login')
  login(){

      return {}
  }


  @Post()
  signup(@Body() body){


  }
}
