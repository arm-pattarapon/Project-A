import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class UserPermission {
    @Prop({required:true,unique:true})
    permissionName:string
}


export const UserPermissionSchema = SchemaFactory.createForClass(UserPermission);
