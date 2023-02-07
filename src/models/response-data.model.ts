/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql"
import { Current } from "./current.model"
import { LocationInfo } from "./location-info.model"

/* eslint-disable prettier/prettier */
export class ResponseData {
    city: string

    state: string

    country: string

    location: LocationInfo

    current: Current

    message: string

}