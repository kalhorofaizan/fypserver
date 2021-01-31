import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {AdminDocument} from "./schema/admin.schema";
import {IsNotEmpty} from "class-validator";

@Injectable()
export class AppService {
 constructor( @InjectModel('admins') private readonly adminModel: Model<AdminDocument>,) {
 }
 async login(email,password){
    const admin=await this.adminModel.where("email",email).findOne();
    if (admin){
     if (admin.password===password){
       return true
     }
    }
    return false
 }
}
