import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidationPipe implements PipeTransform {
    transform(value: any, { metatype, data, type }: ArgumentMetadata): Promise<any>;
}
