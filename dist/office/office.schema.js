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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let officeSchema = class officeSchema {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], officeSchema.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], officeSchema.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Array)
], officeSchema.prototype, "area", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], officeSchema.prototype, "detail", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], officeSchema.prototype, "rating", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], officeSchema.prototype, "main", void 0);
__decorate([
    mongoose_1.Prop({ default: 'logo.png' }),
    __metadata("design:type", String)
], officeSchema.prototype, "logo", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], officeSchema.prototype, "work", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], officeSchema.prototype, "branchids", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], officeSchema.prototype, "commitids", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], officeSchema.prototype, "complaints", void 0);
__decorate([
    mongoose_1.Prop({ default: false, type: Boolean }),
    __metadata("design:type", Boolean)
], officeSchema.prototype, "isDeleted", void 0);
__decorate([
    mongoose_1.Prop({ default: new Date() }),
    __metadata("design:type", Date)
], officeSchema.prototype, "createdDate", void 0);
officeSchema = __decorate([
    mongoose_1.Schema()
], officeSchema);
exports.OfficeSchema = mongoose_1.SchemaFactory.createForClass(officeSchema);
//# sourceMappingURL=office.schema.js.map