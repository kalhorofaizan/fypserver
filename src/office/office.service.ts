import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OfficeDocument } from './office.schema';
import { Model } from 'mongoose';

@Injectable()
export class OfficeService {
  constructor(
    @InjectModel('office') private readonly officeModel: Model<OfficeDocument>,
  ) {}
  getAllOffice(): any {}
}
