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
  // Variables de control
  isBuzzerOn = false;
  isWaterPumpOn = false;
  isLed2On = false;
  isLed1On = false;
  isFanOn = false;

  ngOnInit(): void {
    this.getSensorsData();
  }

  getSensorsData(): void {
    this.esp8266Service.getSensorsData().subscribe((data) => {
      console.log('Sensor Data:', data);
      // Handle the sensor data as needed
    });
  }

  // Métodos toggle
  toggleBuzzer(): void {
    if(this.isBuzzerOn) {
      this.turnOffBuzzer()
    }else{
      this.turnOnBuzzer()
    }
  }

  // toggleWaterPump(): void {
  //   this.esp8266Service.toggleWaterPump().subscribe((response) => {
  //     console.log('Water Pump toggled:', response);
  //     this.isWaterPumpOn = !this.isWaterPumpOn;
  //   });
  // }

  // toggleLed2(): void {
  //   this.esp8266Service.toggleLed2().subscribe((response) => {
  //     console.log('LED2 toggled:', response);
  //     this.isLed2On = !this.isLed2On;
  //   });
  // }

  // toggleLed1(): void {
  //   this.esp8266Service.toggleLed1().subscribe((response) => {
  //     console.log('LED1 toggled:', response);
  //     this.isLed1On = !this.isLed1On;
  //   });
  // }

  // toggleFan(): void {
  //   this.esp8266Service.toggleFan().subscribe((response) => {
  //     console.log('Fan toggled:', response);
  //     this.isFanOn = !this.isFanOn;
  //   });
  // }

  // Métodos directos
  turnOnBuzzer(): void {
    this.esp8266Service.turnOnBuzzer().subscribe((response) => {
      console.log('Buzzer turned on:', response);
      this.isBuzzerOn = true;
    });
  }

  turnOffBuzzer(): void {
    this.esp8266Service.turnOffBuzzer().subscribe((response) => {
      console.log('Buzzer turned off:', response);
      this.isBuzzerOn = false;
    });
  }

  turnOnWaterPump(): void {
    this.esp8266Service.turnOnWaterPump().subscribe((response) => {
      console.log('Water Pump turned on:', response);
      this.isWaterPumpOn = true;
    });
  }

  turnOffWaterPump(): void {
    this.esp8266Service.turnOffWaterPump().subscribe((response) => {
      console.log('Water Pump turned off:', response);
      this.isWaterPumpOn = false;
    });
  }

  turnOnLed2(): void {
    this.esp8266Service.turnOnLed2().subscribe((response) => {
      console.log('LED2 turned on:', response);
      this.isLed2On = true;
    });
  }

  turnOffLed2(): void {
    this.esp8266Service.turnOffLed2().subscribe((response) => {
      console.log('LED2 turned off:', response);
      this.isLed2On = false;
    });
  }

  turnOnLed1(): void {
    this.esp8266Service.turnOnLed1().subscribe((response) => {
      console.log('LED1 turned on:', response);
      this.isLed1On = true;
    });
  }

  turnOffLed1(): void {
    this.esp8266Service.turnOffLed1().subscribe((response) => {
      console.log('LED1 turned off:', response);
      this.isLed1On = false;
    });
  }

  turnOnFan(): void {
    this.esp8266Service.turnOnFan().subscribe((response) => {
      console.log('Fan turned on:', response);
      this.isFanOn = true;
    });
  }

  turnOffFan(): void {
    this.esp8266Service.turnOffFan().subscribe((response) => {
      console.log('Fan turned off:', response);
      this.isFanOn = false;
    });
  }
  // Repeat the pattern for other functionalities
  title = 'TreehouseApp';

}
