import { Measurement } from '../Measurement';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from "rxjs";
import { StorageService } from './storage.service';
import { BACKENDURL } from '../config/config';

export class MeasurementService {
    
    measurements: Measurement[] = [];
    baseURL: string = BACKENDURL;

    constructor(private http: HttpClient, private storage: StorageService) {}

    public async getMeasurement() {
        await firstValueFrom(this.http.get<any>(this.baseURL + '/measurement?page=' + 0 + '&size=1000'))
          .then((res) => {
            this.storage.measurements = res._embedded.measurement
          })
          .catch(async (res) => {
            console.error(res)
          })
    } 
    
    public async getSingleMeasurement(id: number): Promise<any> {
        await firstValueFrom(this.http.get<any>(this.baseURL + '/measurement/' + id))
          .then((res) => {
            return res;
          })
          .catch(async (res) => {
            console.error(res)
          })
    }  

}