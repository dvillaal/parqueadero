import { Component } from '@angular/core';
import {
  EntradaSalidaMainEntryVehicleTypeButtonComponent
} from './entrada-salida-main-entry-vehicle-type-button/entrada-salida-main-entry-vehicle-type-button.component';

interface ButtonOption {
  icon: string;
  label: string;
  tipoVehiculo: string;
}

@Component({
  selector: 'app-entrada-salida-main-entry-vehicle-type',
  imports: [
    EntradaSalidaMainEntryVehicleTypeButtonComponent
  ],
  templateUrl: './entrada-salida-main-entry-vehicle-type.component.html',
  styles: ``
})
export class EntradaSalidaMainEntryVehicleTypeComponent {
  buttonOptions: ButtonOption[] = [
    {
      icon: 'directions_car',
      label: 'CAR',
      tipoVehiculo: 'CARRO'
    },
    {
      icon: 'motorcycle',
      label: 'MOTORCYCLE',
      tipoVehiculo: 'MOTO'
    },
    {
      icon: 'moped',
      label: 'BIKE',
      tipoVehiculo: 'BICI'
    }
  ]
}
