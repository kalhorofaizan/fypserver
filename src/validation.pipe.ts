import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, {metatype, data, type}: ArgumentMetadata) {
    const object = plainToClass(metatype, value)
    const errors = await validate(object)
    if (errors.length>0){
      throw new BadRequestException(errors)
    }
    return value;
  }
}
