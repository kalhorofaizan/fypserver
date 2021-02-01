import {Body, Controller, Get, Post, Render, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("Login")
  getHello(@Req() req,@Res() res) {
    console.log(req.cookies.id!==undefined);
    if (req.cookies.id!==undefined){
     return  res.redirect('/dashboard');
    }else {
      return {error:null}
    }
    return {}

  }

  @Post()
  @Render("Login")
  async login(@Body() body,@Res() res,@Req() req) {
      let error = null;
      const result = await this.appService.login(body.email, body.password);
      if (result) {

        return  res.cookie("id", "asd").redirect('/dashboard');
      } else {
        error = "Email password invalid"
      }
      return {error: error}
  }

}
