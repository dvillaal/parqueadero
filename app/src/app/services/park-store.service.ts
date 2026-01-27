import {Injectable, signal} from '@angular/core';
import {Vehicle} from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkStoreService {
  private placa = signal<string>('');
  private tipoVehiculo = signal<string>('');

  private selectedVehicle = signal<Vehicle | null>(null);
  private paymentAmount = signal<number | null>(null);

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

  getSelectedVehicle() {
    return this.selectedVehicle;
  }

  setSelectedVehicle(vehicle: Vehicle | null) {
    this.selectedVehicle.set(vehicle);
  }

  getPaymentAmount() {
    return this.paymentAmount;
  }

  setPaymentAmount(amount: number | null) {
    this.paymentAmount.set(amount);
  }

}
