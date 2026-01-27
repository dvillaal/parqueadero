import {Component, computed, inject, input, signal} from '@angular/core';
import {ParkService} from '@services/park.service';
import {ParkStoreService} from '@services/park-store.service';
import {NgIf} from '@angular/common';
import {ExitVehicleInfoPlateComponent} from './exit-vehicle-info-plate/exit-vehicle-info-plate.component';
import {ExitVehicleInfoTimeComponent} from './exit-vehicle-info-time/exit-vehicle-info-time.component';
import {ExitVehicleInfoPaymentAmountComponent} from './exit-vehicle-info-payment-amount/exit-vehicle-info-payment-amount.component';

@Component({
  selector: 'app-exit-vehicles-info',
  imports: [
    NgIf,
    ExitVehicleInfoPlateComponent,
    ExitVehicleInfoTimeComponent,
    ExitVehicleInfoPaymentAmountComponent
  ],
  templateUrl: './exit-vehicle-info.component.html',
  styles: ``
})
export class ExitVehicleInfoComponent {
  parkService = inject(ParkService)
  parkStoreService = inject(ParkStoreService)
  selectedVehicle = this.parkStoreService.getSelectedVehicle();
  paymentAmount = this.parkStoreService.getPaymentAmount();

  now = signal(Date.now())

  timer = setInterval(() => {
    this.now.set(Date.now())
  }, 1000);

  elapsedTime = computed(() => {
    const vehicle = this.selectedVehicle();
    if (!vehicle) return null;

    const start = new Date(vehicle.horaIngreso).getTime();
    const diff = this.now() - start;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    return {hours, minutes, seconds};
  })

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  onSubmit(placa: string) {
    console.log(placa);
    this.parkService.createExit(placa)
    alert('Salida registrada con éxito');
    this.parkStoreService.setSelectedVehicle(null)
    this.parkStoreService.setPaymentAmount(null)
    this.parkService.getVehicles()
  }
}
