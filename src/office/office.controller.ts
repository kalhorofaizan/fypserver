import {Controller, Get, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../util/jwtAuthGuard";

@Controller('office')
export class OfficeController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getOffices(): any {
    return {"asda":"asddsd"};
  }
}
