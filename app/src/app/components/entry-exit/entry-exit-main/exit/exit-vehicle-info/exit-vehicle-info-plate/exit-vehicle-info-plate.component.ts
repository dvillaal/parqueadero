import {Component, input} from '@angular/core';

@Component({
  selector: 'app-exit-vehicle-info-plate',
  imports: [],
  templateUrl: './exit-vehicle-info-plate.component.html'
})
export class ExitVehicleInfoPlateComponent {
  plate = input.required()
}
