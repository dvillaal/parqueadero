import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkStoreService {
  private placa = signal<string>('');
  private tipoVehiculo = signal<string>('');

  getPlaca() {
    return this.placa();
  }

  getTipoVehiculo() {
    return this.tipoVehiculo();
  }

  setPlaca(placa: string) {
    this.placa.set(placa.toUpperCase());
  }

  setTipoVehiculo(tipo: string) {
    this.tipoVehiculo.set(tipo);
  }

}
