import {Component, inject} from '@angular/core';
import {ParkService} from '@services/park.service';
import {ParkStoreService} from '@services/park-store.service';

@Component({
  selector: 'app-entry-submit-button',
  imports: [],
  templateUrl: './entry-submit-button.component.html',
  styles: ``
})
export class EntrySubmitButtonComponent {
  parkService = inject(ParkService);
  parkStoreService = inject(ParkStoreService);

  onSubmit(){
    this.parkService.createEntry(
      this.parkStoreService.getPlaca(),
      this.parkStoreService.getTipoVehiculo()
    )
    alert('Entrada registrada con éxito');
    this.parkService.getVehicles()
  }
}
