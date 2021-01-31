import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = adminSchema & Document;

@Schema()
class adminSchema {
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string;
}

export const AdminSchema = SchemaFactory.createForClass(adminSchema);
