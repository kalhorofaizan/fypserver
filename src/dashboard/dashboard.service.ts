import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { use } from 'passport';
import { UserDocument } from '../user/user.schema'
@Injectable()
export class DashboardService {
    constructor( @InjectModel('user') private userModel: Model<UserDocument>,){}

    async getAllUser(){
      const users=await this.userModel.find();
      return users;
    }
    async getUser(id:string){
        const users=await this.userModel.findById(id);
        return users;
      }
}
