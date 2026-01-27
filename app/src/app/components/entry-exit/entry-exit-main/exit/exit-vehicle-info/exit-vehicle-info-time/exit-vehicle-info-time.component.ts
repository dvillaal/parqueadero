import {Component, input} from '@angular/core';

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-exit-vehicle-info-time',
  imports: [],
  templateUrl: './exit-vehicle-info-time.component.html',
})
export class ExitVehicleInfoTimeComponent {
  elapsedTime = input.required<Time | null>();
}
