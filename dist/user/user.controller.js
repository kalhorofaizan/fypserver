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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const user_service_1 = require("./user.service");
const platform_express_1 = require("@nestjs/platform-express");
const image_handler_1 = require("../util/image.handler");
const adduser_model_1 = require("./adduser.model");
const validation_pipe_1 = require("../validation.pipe");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUser(req) {
        return this.userService.getalluser();
    }
    getUser(id) {
        const data = this.userService.getuser(id);
        if (data !== null) {
            return data;
        }
        else {
            return false;
        }
    }
    adduser(user) {
        console.log(user);
        return this.userService.adduser(user);
    }
    delete(id) {
        return this.userService.delete(id);
    }
    editProfile(image, id) {
        const result = this.userService.addProfilePic(image.filename, id);
        return result;
    }
    login(email, password) {
        return this.userService.login(email, password);
    }
};
__decorate([
    common_1.Get('alluser'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "getAllUser", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adduser_model_1.AdduserModel]),
    __metadata("design:returntype", Object)
], UserController.prototype, "adduser", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
__decorate([
    common_1.Post('/profilePic'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('profilePic', {
        fileFilter: image_handler_1.imageFilter,
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: image_handler_1.fileName,
        }),
    })),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], UserController.prototype, "editProfile", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Body('email')), __param(1, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
UserController = __decorate([
    common_1.Injectable(),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map