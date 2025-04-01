import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ timestamps: true })
export class User {
    @Prop({required:true, unique:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    name:string;

    @Prop()
    title?:string;

    @Prop()
    refrestToken?:string;

    @Prop({ default:false})
    isAdmin:boolean;
    

}

export const UserSchema = SchemaFactory.createForClass(User)