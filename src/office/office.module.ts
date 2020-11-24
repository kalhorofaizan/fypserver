import { Module } from '@nestjs/common';
import { OfficeController } from './office.controller';
import { OfficeService } from './office.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OfficeSchema } from './office.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'office', schema: OfficeSchema }]),
  ],
  controllers: [OfficeController],
  providers: [OfficeService],
})
export class OfficeModule {}
