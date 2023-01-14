import { Sensor } from "./Sensor";

export interface Measurement {
    id: number;
    timestamp: Date;
    temperature: number;
    humidity: number;
    sensorID: number;
}