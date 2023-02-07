/* eslint-disable prettier/prettier */

import { Field, ObjectType } from "@nestjs/graphql"
import { AbstractModel } from "../common/abstract.model"

@ObjectType()
export class Poluttion extends AbstractModel{
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