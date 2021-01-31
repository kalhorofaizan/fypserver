import {Body, Controller, Get,Query, Param, Post, Render} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Render("index")
  dashboard(){
      return {}
  }

  @Get('user')
  @Render("user")
  async user(){
    return {users: await this.dashboardService.getAllUser()}


  }

    @Get('company')
    @Render("company")
    company(){
      return{

      }


  }
  @Get('unactive')
    @Render("UnActive")
    unactive(){
      return{

      }

  }
  @Get('profile')
  @Render("profile")
 async profile(@Query("id") id:string){
    return{
      user: await this.dashboardService.getUser(id)
    }

}

@Get('complaintform')
  @Render("complaintform")
  forms(){
    return{

    }

}

@Get('companyform')
  @Render("companyform")
  companyform(){
    return{

    }
  }
  @Get('complaint')
  @Render("complaint")
  complaint(){
    return{

    }
  }
}
