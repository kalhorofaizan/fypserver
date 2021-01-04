import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';
import { MulterModule } from '@nestjs/platform-express';
import {JwtStrategy} from "./jwt.strategy";
import {JwtModule} from "@nestjs/jwt";
import {jwtservice} from "../util/constant";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    JwtModule.register({
      secret:jwtservice.secret,
      signOptions:{expiresIn:"150"}
    }),
    MulterModule.register({ dest: './uploads'}),
  ],
  providers: [UserService,JwtStrategy],
  controllers: [UserController],
  exports:[JwtStrategy]
})
export class UserModule {}
