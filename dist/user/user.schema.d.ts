import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
declare class User {
    name: string;
    number: string;
    area: string[];
    cnic: string;
    email: string;
    password: string;
    profilepic: string;
    isDeleted: boolean;
    createdDate: Date;
}
export declare const UserSchema: import("mongoose").Schema<any>;
export {};
