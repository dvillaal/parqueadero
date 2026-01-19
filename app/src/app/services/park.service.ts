import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  private http = inject(HttpClient)

  vehicles = signal<Vehicle[]>([]);

  constructor() {
    this.getVehicles()
  }

  getVehicles(){
    this.http.get<Array<Vehicle>>(`${environment.parkApiUrl}/parqueadero/activos`)
      .subscribe(res => {
        console.log(res)
        this.vehicles.set(res)
        console.log(this.vehicles());
      }
    )
  }

  createEntry(placa: string, tipoVehiculo: string) {
    try {
      this.http.post(`${environment.parkApiUrl}/parqueadero/entrada`, {
        placa: placa,
        tipoVehiculo: tipoVehiculo
      }).subscribe()
    } catch (error) {
      console.error(error);
    }
  }

}
