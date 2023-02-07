/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql"

/* eslint-disable prettier/prettier */
@ObjectType()
export class Coordinates {
    @Field()
    lat: number
    @Field()
    lon: number
}