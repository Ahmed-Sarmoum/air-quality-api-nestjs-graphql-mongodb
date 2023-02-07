/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AbstractRepo } from "./database/abstract.repository";
import { AirQualityDocument } from "./models/air-quality.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Poluttion } from "./models/poluttion.model";

@Injectable()
export class AppRepository extends AbstractRepo<AirQualityDocument> {
    
    constructor(@InjectModel(Poluttion.name) airPoluttionModel: Model<AirQualityDocument>) {
        super(airPoluttionModel);
    }
}