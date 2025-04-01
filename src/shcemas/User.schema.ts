import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({required:true, unique:true})
    email:string;

    @Prop({required:true})
    passwordHash:string;

    @Prop({required:true})
    name:string;

    @Prop({required:false})
    title?:string;

    @Prop({required:false})
    refrestToken?:string;

    @Prop({default:false})
    isAdmin:boolean;
}

export const UserSchema = SchemaFactory.createForClass(User)