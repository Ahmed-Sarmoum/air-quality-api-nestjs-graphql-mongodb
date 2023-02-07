/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Coordinates } from './models/coordinates.model';
import { Poluttion } from './models/poluttion.model';
import { latLng, poluttionCreateStubs, poluttionCreateStubsReq, poluttionStubs } from './stubs/poluttion.stubs';

jest.mock('./app.service')
describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
 
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService)
    jest.clearAllMocks()
  });

  describe('getPollution', () => {
    describe('when getPollution is called', () => {
      let result
      beforeEach(async () => {
        result = await appController.getPollution(latLng)
      })

      test("then it should call appService", () => {
        expect(appService.getPollution).toBeCalledWith(latLng)
      })

      test("then it should return a result poluttion", () => {
        expect(result).toEqual(poluttionStubs)
      })
    });

    describe('getParisAirQuality', () => {
      describe('when getParisAirQuality is called', () => {
        beforeEach(async () => {
          await appController.getParisAirQuality()
        })
        test("then it should call appService", () => {
          expect(appService.getParisAirQuality)
        }) 
      })
    })
    describe('createAirQuality', () => {
      describe('when createAirQuality is called', () => { 
        let pol: Poluttion     
        beforeEach(async () => {
          pol = await appService.createAirQuality(poluttionCreateStubsReq)
        })   

        test("then it should return a created model poluttion", () => {
          expect(pol).toEqual(poluttionCreateStubs)
        })
      })
    })
  });
});
