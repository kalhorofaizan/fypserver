import { Injectable } from '@nestjs/common';
import { InjectModel, Prop } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { UserModule } from './user.module';
import { UserDataModel } from './user.model';

@Injectable()
export class UserServices {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}
  getalluser(): any {
    return this.userModel.find({ isDeleted: false });
  }
  async adduser(dataModel: UserDataModel): Promise<any> {
    const user = new this.userModel(dataModel);
    const id = await user.save();
    return id;
  }
  async delete(id: string): Promise<any> {
    const user = await this.userModel.updateOne(
      { _id: id },
      { isDeleted: true },
    );
    return user;
  }
}
