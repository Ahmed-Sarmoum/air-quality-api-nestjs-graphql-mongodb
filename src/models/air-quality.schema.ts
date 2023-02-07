/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema({versionKey: false})
export class AirQualityDocument extends AbstractDocument {
    @Prop()
    ts: string
    @Prop()
    aqius: number
    @Prop()
    mainus: string
    @Prop()
    aqicn: number
    @Prop()
    maincn: string
}

export const AirQualitySchema = SchemaFactory.createForClass(AirQualityDocument)