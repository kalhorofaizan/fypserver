import {Controller, Get, Post, Render} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Render("index")
  dashboard(){

  }

  @Get('login')
  @Post("login")
  @Render('Login')
  login(){

  }


}
