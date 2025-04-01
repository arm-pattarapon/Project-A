import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./User.schema";
import mongoose from "mongoose";

@Schema({ timestamps: true })
export class UserPermission {
    @Prop()
    user:string;

    @Prop({required:true})
    permissionName:string

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    users: User[];
}


export const UserPermissionSchema = SchemaFactory.createForClass(UserPermission);
