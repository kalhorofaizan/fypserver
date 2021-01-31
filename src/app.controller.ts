import {Body, Controller, Get, Post, Render, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("Login")
  getHello() {
    return {}
  }

  @Post()
  @Render("Login")
  async login(@Body() body, @Session() session, @Res() res) {
    const result = await this.appService.login(body.email, body.password);
    if (result) {

      return res.redirect('/dashboard');
    }
    return {}
  }

}
