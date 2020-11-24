import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OfficeDocument = officeSchema & Document;

@Schema()
class officeSchema {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  area: string[];
  @Prop({ required: true })
  detail: string;
  @Prop()
  rating: number;
  @Prop()
  main: boolean;
  @Prop({ default: 'logo.png' })
  logo: string;
  @Prop({ required: true })
  work: string;
  @Prop()
  branchids: string[];
  @Prop()
  commitids: string[];
  @Prop()
  complaints: string[];
  @Prop({ default: false, type: Boolean })
  isDeleted: boolean;
  @Prop({ default: new Date() })
  createdDate: Date;
}

export const OfficeSchema = SchemaFactory.createForClass(officeSchema);
