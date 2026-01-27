import {Component, inject, input} from '@angular/core';
import {ParkStoreService} from '@services/park-store.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-entry-vehicle-type-button',
  imports: [
    NgClass
  ],
  templateUrl: './entry-vehicle-type-button.component.html',
  styles: ``
})
export class EntryVehicleTypeButtonComponent {
  parkStoreService = inject(ParkStoreService)

  onSelectVehicleType(tipoVehiculo: string){
    this.parkStoreService.setTipoVehiculo(tipoVehiculo);
  }

  icon = input.required<string>()
  label = input.required<string>()
  tipoVehiculo = input.required<string>()
}
