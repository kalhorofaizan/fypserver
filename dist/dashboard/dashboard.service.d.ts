import { Model } from 'mongoose';
import { UserDocument } from '../user/user.schema';
export declare class DashboardService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAllUser(): Promise<UserDocument[]>;
    getUser(id: string): Promise<UserDocument>;
}
