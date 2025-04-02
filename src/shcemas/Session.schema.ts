import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema({ timestamps: true })
export class Session {
   @Prop({required:true})
   ip:string

   @Prop({required:true})
   device:string

   @Prop({required:true})
   expiresAt:Date;
}


export const SessionSchema = SchemaFactory.createForClass(Session);
