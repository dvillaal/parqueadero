import {Component, inject} from '@angular/core';
import {ParkService} from '@services/park.service';
import {ParkStoreService} from '@services/park-store.service';

@Component({
  selector: 'app-entrada-salida-main-entry-submit-button',
  imports: [],
  templateUrl: './entrada-salida-main-entry-submit-button.component.html',
  styles: ``
})
export class EntradaSalidaMainEntrySubmitButtonComponent {
  parkService = inject(ParkService);
  parkStoreService = inject(ParkStoreService);

  onSubmit(){
    this.parkService.createEntry(
      this.parkStoreService.getPlaca(),
      this.parkStoreService.getTipoVehiculo()
    )
  }
}
