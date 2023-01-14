import { BACKENDURL } from "../config/config";
import { Sensor } from '../Sensor';
import { Measurement } from "../Measurement";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from "rxjs";
import { StorageService } from "./storage.service";

export class SensorService {

    sensors: Sensor[] = [];
    baseURL: string = BACKENDURL;

    constructor(private http: HttpClient, private storage: StorageService) {}

    public async getSensors() {
        await firstValueFrom(this.http.get<any>(this.baseURL + '/sensor')).then((res) => {
            this.storage.sensoren = res._embedded.sensor;
        })
        .catch(((res) => {
            console.error(res)
        }))
    }

    public async getSingleSensor(id: number) {
        await firstValueFrom(this.http.get<any>(this.baseURL + '/sensor/' + id)).then((res) => {
          return res._embedded.sensor;
        })
          .catch(async (res) => {
            console.error(res)
          })
    }
    
    public async getSensorMeasurements(id: number): Promise<Measurement[]> {
        return await firstValueFrom(this.http.get<any>(this.baseURL + '/sensor/' + id + '/measurements')).then((res) => {
          return res._embedded.measurement;
        })
          .catch(async (res) => {
            console.error(res)
          })
    }  

    

      



}