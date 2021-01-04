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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hash_1 = require("../util/hash");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(jwtService, userModel) {
        this.jwtService = jwtService;
        this.userModel = userModel;
    }
    getalluser() {
        return this.userModel.find({ isDeleted: false });
    }
    async getuser(id) {
        const user = await this.userModel.find({ _id: id });
        return user;
    }
    async adduser(userModel) {
        const data = await this.userModel.findOne().where('email', userModel.email);
        if (data === null) {
            userModel.password = await hash_1.hashPassword(userModel.password);
            const user = new this.userModel(userModel);
            const userdata = await user.save();
            return {
                id: userdata.id,
            };
        }
        else {
            return new common_1.HttpException('email already use', common_1.HttpStatus.CONFLICT);
        }
    }
    async delete(id) {
        const data = await this.userModel.findById(id);
        if (data !== null) {
            const user = await this.userModel.updateOne({ _id: id }, { isDeleted: true });
            return true;
        }
        else {
            return false;
        }
    }
    async addProfilePic(imagename, id) {
        const data = await this.userModel.findById(id);
        if (data !== null) {
            const user = await this.userModel.updateOne({ _id: id }, { profilepic: imagename });
            return true;
        }
        else {
            return false;
        }
    }
    async login(email, password) {
        const data = await this.userModel.findOne({ email: email });
        if (data !== null) {
            const result = await hash_1.comparePassword(password, data.password);
            if (result) {
                return {
                    access_token: "Bearer " + this.jwtService.sign({ name: data.name, id: data.id })
                };
            }
        }
        return new common_1.HttpException('invalide email and password', 401);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('user')),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map