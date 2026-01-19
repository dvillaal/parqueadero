import { Component } from '@angular/core';
import {
  EntradaSalidaMainEntryPlateComponent
} from './entrada-salida-main-entry-plate/entrada-salida-main-entry-plate.component';
import {
  EntradaSalidaMainEntryVehicleTypeComponent
} from './entrada-salida-main-entry-vehicle-type/entrada-salida-main-entry-vehicle-type.component';
import {
  EntradaSalidaMainEntrySubmitButtonComponent
} from './entrada-salida-main-entry-submit-button/entrada-salida-main-entry-submit-button.component';
import {
  EntradaSalidaMainHeaderComponent
} from '../../../common/entrada-salida-main-header/entrada-salida-main-header.component';

@Component({
  selector: 'app-entrada-salida-main-entry',
  imports: [
    EntradaSalidaMainEntryPlateComponent,
    EntradaSalidaMainEntryVehicleTypeComponent,
    EntradaSalidaMainEntrySubmitButtonComponent,
    EntradaSalidaMainHeaderComponent
  ],
  templateUrl: './entrada-salida-main-entry.component.html',
  styles: ``
})
export class EntradaSalidaMainEntryComponent {

}
