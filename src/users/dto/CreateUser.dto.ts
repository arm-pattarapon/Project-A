import { IsBoolean, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsStrongPassword({
        minLength:12,
        minLowercase:1, 
        minUppercase:1, 
        minNumbers:1, 
        minSymbols:1})
    @IsString()
    @IsNotEmpty()
    passwordHash:string

    @IsNotEmpty()
    @IsString()
    name:string

    @IsString()
    title?:string

    @IsString()
    refrestToken?:string

    @IsBoolean()
    isAdmin:boolean;
}