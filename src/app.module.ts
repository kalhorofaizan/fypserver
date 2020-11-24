import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/fyp'),
    UserModule,
    OfficeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
