import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema({ timestamps: true })
export class TimeStamp {
    @Prop({required:true})
    ip:string

    @Prop({required:true})
    device:string

    @Prop()
    from:Date

    @Prop()
    to:Date

    @Prop()
    date:Date

    @Prop()
    isManual:boolean

    @Prop()
    remark:string

}


export const TimeStampSchema = SchemaFactory.createForClass(TimeStamp);
