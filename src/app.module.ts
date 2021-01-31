import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import {OfficeSchema} from "./office/office.schema";
import {AdminSchema} from "./schema/admin.schema";

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost/fyp'),
     MongooseModule.forRoot('mongodb+srv://faizan:faizan123@cluster0.0a7it.mongodb.net/fyp?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'admins', schema: AdminSchema }]),
    UserModule,
    OfficeModule,
    DashboardModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
