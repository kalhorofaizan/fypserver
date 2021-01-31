import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {OfficeSchema} from "../office/office.schema";
import {UserSchema} from "../user/user.schema";

@Module({
  imports:[  MongooseModule.forFeature([{ name: 'user', schema: UserSchema },{ name: 'office', schema: OfficeSchema }]),],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
