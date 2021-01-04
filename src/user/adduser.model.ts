import {IsEmail, IsNotEmpty} from "class-validator";
export class AdduserModel{
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    number:string;
    @IsEmail()
    @IsNotEmpty()
    email:string;
    @IsNotEmpty()
    password:string;
}
