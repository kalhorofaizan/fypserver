import { Controller, Get } from '@nestjs/common';

@Controller('office')
export class OfficeController {
  @Get()
  getOffices(): any {

  }

}
