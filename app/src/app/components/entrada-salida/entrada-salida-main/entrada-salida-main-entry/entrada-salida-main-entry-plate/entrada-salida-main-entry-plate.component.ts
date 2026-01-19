import {Component, inject} from '@angular/core';
import {ParkStoreService} from '@services/park-store.service';

@Component({
  selector: 'app-entrada-salida-main-entry-plate',
  imports: [],
  templateUrl: './entrada-salida-main-entry-plate.component.html',
})
export class EntradaSalidaMainEntryPlateComponent {
  parkStoreService = inject(ParkStoreService)

  onChange(plate: string){
    this.parkStoreService.setPlaca(plate);
  }

}
