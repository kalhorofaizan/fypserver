import { HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { AdduserModel } from "./adduser.model";
import { JwtService } from "@nestjs/jwt";
export declare class UserService {
    private jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: Model<UserDocument>);
    getalluser(): any;
    getuser(id: string): Promise<any>;
    adduser(userModel: AdduserModel): Promise<any>;
    delete(id: string): Promise<boolean>;
    addProfilePic(imagename: string, id: string): Promise<any>;
    login(email: string, password: string): Promise<HttpException | {
        access_token: string;
    }>;
}
