import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    dashboard(): {};
    user(): Promise<{
        users: import("../user/user.schema").UserDocument[];
    }>;
    company(): {};
    unactive(): {};
    profile(id: string): Promise<{
        user: import("../user/user.schema").UserDocument;
    }>;
    forms(): {};
    companyform(): {};
    complaint(): {};
}
