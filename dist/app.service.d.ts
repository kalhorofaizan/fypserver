import { Model } from "mongoose";
import { AdminDocument } from "./schema/admin.schema";
export declare class AppService {
    private readonly adminModel;
    constructor(adminModel: Model<AdminDocument>);
    login(email: any, password: any): Promise<boolean>;
}
