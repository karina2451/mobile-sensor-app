import { Component, OnInit } from '@angular/core'
import { Sensor } from '../Sensor'
import { SensorService } from '../shared/sensor.service'
import { StorageService } from '../shared/storage.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  sensorData: Array<Sensor>
  
  constructor(private sensorService: SensorService, public storage: StorageService) {
    // Use the component constructor to inject providers.
  }

  async ngOnInit() {
    await this.getSensors()
  }

  async getSensors() {
    await this.sensorService.getSensors();

  }
}
