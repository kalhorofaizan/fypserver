import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, min: 10 })
  number: string;
  @Prop()
  area: string[];
  @Prop()
  cnic: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true, min: 6 })
  password: string;
  @Prop({ default: 'profilepic.png' })
  profilepic: string;
  @Prop({ default: false, type: Boolean })
  isDeleted: boolean;
  @Prop({ default: new Date() })
  createdDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
