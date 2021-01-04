import { UserService } from './user.service';
import { AdduserModel } from "./adduser.model";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUser(req: any): any;
    getUser(id: string): any;
    adduser(user: AdduserModel): any;
    delete(id: string): Promise<boolean>;
    editProfile(image: any, id: string): any;
    login(email: string, password: string): Promise<import("@nestjs/common").HttpException | {
        access_token: string;
    }>;
}
