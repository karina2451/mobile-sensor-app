import { Measurement } from '../Measurement';
import { Sensor } from '../Sensor';


export class StorageService {

  constructor() { }

  public sensoren: Sensor[] = [];
  public measurements: Measurement[] = [];
}