import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Esp8266Service } from './services/esp8266.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private esp8266Service: Esp8266Service){}
  
  ngOnInit(): void {
    this.getSensorsData();
  }

  // Example usage in a component method
  getSensorsData(): void {
    this.esp8266Service.getSensorsData().subscribe((data) => {
      console.log('Sensor Data:', data);
      // Handle the sensor data as needed
    });
  }

  // Example usage to turn on the buzzer
  turnOnBuzzer(): void {
    this.esp8266Service.turnOnBuzzer().subscribe((response) => {
      console.log('Buzzer turned on:', response);
    });
  }

  // Example usage to turn off the buzzer
  turnOffBuzzer(): void {
    this.esp8266Service.turnOffBuzzer().subscribe((response) => {
      console.log('Buzzer turned off:', response);
    });
  }

  // Repeat the pattern for other functionalities
  title = 'TreehouseApp';

}
