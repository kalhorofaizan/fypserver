import { OfficeDocument } from './office.schema';
import { Model } from 'mongoose';
export declare class OfficeService {
    private readonly officeModel;
    constructor(officeModel: Model<OfficeDocument>);
    getAllOffice(): any;
}
