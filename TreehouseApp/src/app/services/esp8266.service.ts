// Import necessary Angular modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Esp8266Service {
  private baseUrl = 'http://192.168.1.4'; // Asegúrate de utilizar la dirección IP correcta

  constructor(private http: HttpClient) {}

  // Get sensor data
  getSensorsData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  // Control buzzer
  turnOnBuzzer(): Observable<any> {
    return this.http.get(`${this.baseUrl}/buzzer/on`);
  }

  turnOffBuzzer(): Observable<any> {
    return this.http.get(`${this.baseUrl}/buzzer/off`);
  }

  // Control water pump
  turnOnWaterPump(): Observable<any> {
    return this.http.get(`${this.baseUrl}/waterpump/on`);
  }

  turnOffWaterPump(): Observable<any> {
    return this.http.get(`${this.baseUrl}/waterpump/off`);
  }

  // Control LED2
  turnOnLed2(): Observable<any> {
    return this.http.get(`${this.baseUrl}/led2/on`);
  }

  turnOffLed2(): Observable<any> {
    return this.http.get(`${this.baseUrl}/led2/off`);
  }

  // Control LED1
  turnOnLed1(): Observable<any> {
    return this.http.get(`${this.baseUrl}/led1/on`);
  }

  turnOffLed1(): Observable<any> {
    return this.http.get(`${this.baseUrl}/led1/off`);
  }

  // Control fan
  turnOnFan(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fan/on`);
  }

  turnOffFan(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fan/off`);
  }
}
