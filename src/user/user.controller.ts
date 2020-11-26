import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  UseInterceptors,
  Post,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { UserService } from './user.service';
import { UserDataModel } from './user.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFilter, fileName } from '../util/image.handler';

@Controller('user')
export class UserController {
  private user: UserDataModel;
  constructor(private userService: UserService) {}

  @Get()
  getAllUser(): any {
    return this.userService.getalluser();
  }

  @Get(':id')
  getUser(@Param('id') id: string): any {
    const data = this.userService.getuser(id);
    if (data !== null) {
      return data;
    } else {
      return false;
    }
  }

  @Post()
  adduser(
    @Body('name') name: string,
    @Body('number') number: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): any {
    this.user = new UserDataModel(name, number, email, password);
    return this.userService.adduser(this.user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Post('/profilePic')
  @UseInterceptors(
    FileInterceptor('profilePic', {
      fileFilter: imageFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: fileName,
      }),
    }),
  )
  editProfile(@UploadedFile() image, @Body('id') id: string): any {
    const result = this.userService.addProfilePic(image.filename, id);
    return result;
  }

  @Post('/login')
  login(@Body('email') email: string, @Body('password') password: string) {
    return this.userService.login(email, password);
  }
}
