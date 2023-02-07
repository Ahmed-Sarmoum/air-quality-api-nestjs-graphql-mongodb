/* eslint-disable prettier/prettier */

import { Coordinates } from "src/models/coordinates.model"
import { Poluttion } from "src/models/poluttion.model"

export const poluttionStubs = () =>{
    return {
        Result: {
            poluttion: {
                ts: "2023-02-07T21:00:00.000Z",
                aqius: 64,
                mainus: "p2",
                aqicn: 27,
                maincn: "n2",
                _id: "63e2c699ae7362acf0fad852"
            }
        }
    }   
}

export const poluttionCreateStubsReq: Poluttion = {
    ts: "2023-02-07T21:00:00.000Z",
    aqius: 64,
    mainus: "p2",
    aqicn: 27,
    maincn: "n2",
    _id: "63e2c699ae7362acf0fad852"
}  

export const poluttionCreateStubs = (): Poluttion =>{
    return {  
        ts: "2023-02-07T21:00:00.000Z",
        aqius: 64,
        mainus: "p2",
        aqicn: 27,
        maincn: "n2",
        _id: "63e2c699ae7362acf0fad852"
    }  
}

export const latLng:Coordinates = {  
        lat:2.23333,
        lon:32.23344
}  