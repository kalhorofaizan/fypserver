import { Document } from 'mongoose';
export declare type AdminDocument = adminSchema & Document;
declare class adminSchema {
    email: string;
    password: string;
}
export declare const AdminSchema: import("mongoose").Schema<any>;
export {};
