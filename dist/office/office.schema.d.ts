import { Document } from 'mongoose';
export declare type OfficeDocument = officeSchema & Document;
declare class officeSchema {
    name: string;
    address: string;
    area: string[];
    detail: string;
    rating: number;
    main: boolean;
    logo: string;
    work: string;
    branchids: string[];
    commitids: string[];
    complaints: string[];
    isDeleted: boolean;
    createdDate: Date;
}
export declare const OfficeSchema: import("mongoose").Schema<any>;
export {};
