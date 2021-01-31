import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  UseInterceptors,
  Post,
  Request,
  UploadedFile, UseGuards, Injectable, Render,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFilter, fileName } from '../util/image.handler';
import {AdduserModel} from "./adduser.model";
import {ValidationPipe} from "../validation.pipe";
import { AuthGuard } from '@nestjs/passport';
import {JwtAuthGuard} from "../util/jwtAuthGuard";
@Injectable()

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('alluser')
  getAllUser(@Request() req): any {
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
    @Body(new ValidationPipe()) user: AdduserModel,
  ): any {
    return this.userService.adduser(user);
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
        destination: './profile/uploads',
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
