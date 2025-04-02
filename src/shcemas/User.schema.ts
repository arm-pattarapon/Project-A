import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserPermission } from "./UserPermission.schema";
import { Session } from "./Session.schema";
import { TimeStamp } from "./TimeStamp.schema";


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
    
    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref:'UserPermission'}], required: true, validate: (permissions: UserPermission[]) => permissions.length > 0})
    permissions: UserPermission[];

    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref:'Session'}]})
    sessions?:Session[];

    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref:'TimeStamp'}]})
    timeStamps?:TimeStamp[];
}

export const UserSchema = SchemaFactory.createForClass(User)