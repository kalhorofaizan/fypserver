import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { comparePassword, hashPassword } from '../util/hash';
import {AdduserModel} from "./adduser.model";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(
      private jwtService:JwtService,
      @InjectModel('user') private userModel: Model<UserDocument>,
  ) {}

  getalluser(): any {
    return this.userModel.find({ isDeleted: false });
  }

  async getuser(id: string): Promise<any> {
    const user = await this.userModel.find({ _id: id });
    return user;
  }

  async adduser(userModel: AdduserModel): Promise<any> {
    const data = await this.userModel.findOne().where('email', userModel.email);
    if (data === null) {
      userModel.password = await hashPassword(userModel.password);
      const user = new this.userModel(userModel);
      const userdata = await user.save();
      return {
        id: userdata.id,
        access_token:"Bearer "+this.jwtService.sign({name:userdata.name,id:userdata.id}),
        name:userdata.name,
        profilepic:userdata.profilepic,
        email:userdata.email,
      };
    } else {
      return new HttpException('email already use', 401);
    }
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.userModel.findById(id);
    if (data !== null) {
      const user = await this.userModel.updateOne(
        { _id: id },
        { isDeleted: true },
      );
      return true;
    } else {
      return false;
    }
  }

  async addProfilePic(imagename: string, id: string): Promise<any> {
    const data = await this.userModel.findById(id);
    if (data !== null) {
      const user = await this.userModel.updateOne(
        { _id: id },
        { profilepic: imagename },
      );
      return true;
    } else {
      return false;
    }
  }

  async login(email: string, password: string) {
    const data = await this.userModel.findOne({ email: email });
    if (data !== null) {
      const result = await comparePassword(password, data.password);
      if (result) {
        return {
          access_token:"Bearer "+this.jwtService.sign({name:data.name,id:data.id}),
          name:data.name,
          profilepic:data.profilepic,
          email:data.email,
          id:data.id
        };
      }
    }
    return new HttpException('invalide email and password', 401);
  }
}
