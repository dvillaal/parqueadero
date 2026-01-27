import {Component, inject} from '@angular/core';
import {ParkService} from '@services/park.service';

@Component({
  selector: 'app-entry-exit-header',
  imports: [],
  templateUrl: './entry-exit-header.component.html',
})
export class EntryExitHeaderComponent {
  parkService = inject(ParkService)
  get occupancy(): number {
    return this.parkService.vehicles().length;
  }
}
