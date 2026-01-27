import {Component, inject} from '@angular/core';
import {ParkStoreService} from '@services/park-store.service';

@Component({
  selector: 'app-entry-plate',
  imports: [],
  templateUrl: './entry-plate.component.html',
})
export class EntryPlateComponent {
  parkStoreService = inject(ParkStoreService)

  onChange(plate: string){
    this.parkStoreService.setPlaca(plate);
  }

}
