import { Component } from '@angular/core';
import {EntryVehicleTypeButtonComponent} from './entry-vehicle-type-button/entry-vehicle-type-button.component';

interface ButtonOption {
  icon: string;
  label: string;
  tipoVehiculo: string;
}

@Component({
  selector: 'app-entry-vehicle-type',
  imports: [
    EntryVehicleTypeButtonComponent
  ],
  templateUrl: './entry-vehicle-type.component.html',
  styles: ``
})
export class EntryVehicleTypeComponent {
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
