import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { UserDataModel } from './user.model';
import { comparePassword, hashPassword } from '../util/hash';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  getalluser(): any {
    return this.userModel.find({ isDeleted: false });
  }

  async getuser(id: string): Promise<any> {
    const user = await this.userModel.find({ _id: id });
    return user;
  }

  async adduser(dataModel: UserDataModel): Promise<any> {
    const data = await this.userModel.findOne().where('email', dataModel.email);
    if (data === null) {
      dataModel.password = await hashPassword(dataModel.password);
      const user = new this.userModel(dataModel);
      const userdata = await user.save();
      return {
        id: userdata.id,
        name: userdata.name,
        profilepic: userdata.profilepic,
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
          id: data.id,
          name: data.name,
          profilepic: data.profilepic,
        };
      }
    }
    return new HttpException('invalide email and password', 401);
  }
}
