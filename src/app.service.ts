/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { Coordinates } from './models/coordinates.model';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { map, Observable } from 'rxjs';
import { API_KEY, API_URL, API_URL_PARIS } from './constants/args';
import { AirQualityModel } from './models/ari-quality.model';
import { CreateAirQualityInput } from './inputs/create-air-quality.input';
import { AppRepository } from './app.repository';
import { AirQualityDocument } from './models/air-quality.schema';
import { Poluttion } from './models/poluttion.model';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  
  private readonly logger = new Logger(AppService.name)
  constructor(
    private readonly http: HttpService,
    private readonly airQualityRepo: AppRepository) {}
 

  getPollution(latLng: Coordinates): Observable<AxiosResponse<AirQualityModel>> {
    
    return this.http.get<AirQualityModel>(API_URL+"/v2/nearest_city?"+
      latLng.lat+"&"+latLng.lon+"&key="+API_KEY).pipe(
        map((axiosResponse: AxiosResponse) => {
          return { Result: { pollution: axiosResponse.data.data.current.pollution } } as unknown as AxiosResponse;
        }),
     );
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async getParisAirQuality() {
    
    return this.http.get<AirQualityModel>(API_URL_PARIS+API_KEY).subscribe( res => {
      console.log(res.data.data);
      this.createAirQuality(res.data.data.current.pollution)
    })
  }

  async createAirQuality(createAirQualityData: CreateAirQualityInput) {
    const airQDoc = await this.airQualityRepo.create({
      ...createAirQualityData
    }) 
    return this.toModel(airQDoc)
  }

  private toModel(airQualityDocument: AirQualityDocument): Poluttion {
    
    return {
        _id: airQualityDocument._id.toHexString(),
        ts: airQualityDocument.ts,
        aqius: airQualityDocument.aqius,
        mainus: airQualityDocument.mainus,
        aqicn: airQualityDocument.aqicn,
        maincn: airQualityDocument.maincn
        
    }
}
}
