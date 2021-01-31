"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    dashboard() {
        return {};
    }
    async user() {
        return { users: await this.dashboardService.getAllUser() };
    }
    company() {
        return {};
    }
    unactive() {
        return {};
    }
    async profile(id) {
        return {
            user: await this.dashboardService.getUser(id)
        };
    }
    forms() {
        return {};
    }
    companyform() {
        return {};
    }
    complaint() {
        return {};
    }
};
__decorate([
    common_1.Get(),
    common_1.Render("index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "dashboard", null);
__decorate([
    common_1.Get('user'),
    common_1.Render("user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "user", null);
__decorate([
    common_1.Get('company'),
    common_1.Render("company"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "company", null);
__decorate([
    common_1.Get('unactive'),
    common_1.Render("UnActive"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "unactive", null);
__decorate([
    common_1.Get('profile'),
    common_1.Render("profile"),
    __param(0, common_1.Query("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "profile", null);
__decorate([
    common_1.Get('complaintform'),
    common_1.Render("complaintform"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "forms", null);
__decorate([
    common_1.Get('companyform'),
    common_1.Render("companyform"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "companyform", null);
__decorate([
    common_1.Get('complaint'),
    common_1.Render("complaint"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "complaint", null);
DashboardController = __decorate([
    common_1.Controller('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map