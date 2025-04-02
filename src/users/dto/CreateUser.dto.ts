import { IsBoolean, IsNotEmpty, IsString, IsStrongPassword, IsEmail,IsOptional, IsArray } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;

    @IsStrongPassword({
        minLength:12,
        minLowercase:1, 
        minUppercase:1, 
        minNumbers:1, 
        minSymbols:1})
    @IsString()
    @IsNotEmpty()
    password:string

    @IsNotEmpty()
    @IsString()
    name:string

    @IsString()
    @IsOptional()
    title?:string

    @IsString()
    @IsOptional()
    refrestToken?:string

    @IsBoolean()
    @IsOptional()
    isAdmin:boolean;

    @IsArray()
    @IsNotEmpty()
    permissions:Array<string>
}