/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAirQualityInput {
    @Field()
    ts: string
    @Field()
    aqius: number
    @Field()
    mainus: string
    @Field()
    aqicn: number
    @Field()
    maincn: string
    
}