/* eslint-disable prettier/prettier */
import { latLng, poluttionCreateStubs, poluttionStubs } from "../stubs/poluttion.stubs";

/* eslint-disable prettier/prettier */
export const AppService = jest.fn().mockReturnValue({
    getPollution: jest.fn().mockResolvedValue(poluttionStubs),
    getParisAirQuality: jest.fn().mockResolvedValue({}),
    createAirQuality: jest.fn().mockResolvedValue(poluttionCreateStubs)
})