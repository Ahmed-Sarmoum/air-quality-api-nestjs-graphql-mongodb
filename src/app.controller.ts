/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Coordinates } from './models/coordinates.model';
import { CreateAirQualityInput } from './inputs/create-air-quality.input';

@Controller()
export class AppController {
  result: any
  data2: CreateAirQualityInput
  constructor(private readonly appService: AppService) {}

 
  @Get('pollution/:lat/:lon')
  getPollution(@Param() latLng: Coordinates): any {
    return this.appService.getPollution(latLng)
  }

  @Get('paris')
  getParisAirQuality(): any {
    return this.appService.getParisAirQuality()
  }
}
