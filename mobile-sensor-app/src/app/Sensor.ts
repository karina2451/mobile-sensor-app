export interface Sensor {
    id: number;
    name: string;
    location: string;
    active: boolean;
    position: string;
}
export enum SensorType {
    INDOOR = 1,
    OUTDOOR = 2,
    WATER = 3
}