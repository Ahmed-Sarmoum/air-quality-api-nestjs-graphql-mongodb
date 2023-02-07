/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql"
import { Coordinates } from "./coordinates.model"

/* eslint-disable prettier/prettier */
export class LocationInfo {
    type: string
    coordinates: Coordinates
}