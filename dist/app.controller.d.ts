import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(req: any, res: any): any;
    login(body: any, res: any, req: any): Promise<any>;
}
