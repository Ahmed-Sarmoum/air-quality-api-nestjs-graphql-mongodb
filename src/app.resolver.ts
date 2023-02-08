/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { AirQualityModel } from "./models/ari-quality.model";
import { Coordinates } from "./models/coordinates.model";
import { CreateAirQualityInput } from "./inputs/create-air-quality.input";
import { GetAirArgs } from "./DTO/get-user-args.dto";
import { Poluttion } from "./models/poluttion.model";
 
@Resolver(() => AirQualityModel)
export class AirQualistyResolver {
    
    constructor(private readonly appService: AppService) {}

    @Mutation(() => Poluttion)
    async createAirQuality(@Args('CreateAirQualityInput') createAirQualityInput: CreateAirQualityInput) {
        return this.appService.createAirQuality(createAirQualityInput)
    }

    @Query(() => Coordinates, {name: 'data'})
    async getPollution(@Args() getUserArgs: GetAirArgs) {
        return this.appService.getPollution(getUserArgs)
    }
}