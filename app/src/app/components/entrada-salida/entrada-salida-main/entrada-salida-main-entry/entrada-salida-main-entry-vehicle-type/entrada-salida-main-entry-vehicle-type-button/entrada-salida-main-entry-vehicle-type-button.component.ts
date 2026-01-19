import {Component, inject, input} from '@angular/core';
import {ParkStoreService} from '@services/park-store.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-entrada-salida-main-entry-vehicle-type-button',
  imports: [
    NgClass
  ],
  templateUrl: './entrada-salida-main-entry-vehicle-type-button.component.html',
  styles: ``
})
export class EntradaSalidaMainEntryVehicleTypeButtonComponent {
  parkStoreService = inject(ParkStoreService)

  onSelectVehicleType(tipoVehiculo: string){
    this.parkStoreService.setTipoVehiculo(tipoVehiculo);
  }

  icon = input.required<string>()
  label = input.required<string>()
  tipoVehiculo = input.required<string>()
}
