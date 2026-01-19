import { Component } from '@angular/core';
import {
  EntradaSalidaMainHeaderComponent
} from '../../../common/entrada-salida-main-header/entrada-salida-main-header.component';
import {
  EntradaSalidaMainExitSearchBarComponent
} from './entrada-salida-main-exit-search-bar/entrada-salida-main-exit-search-bar.component';

@Component({
  selector: 'app-entrada-salida-main-exit',
  imports: [
    EntradaSalidaMainHeaderComponent,
    EntradaSalidaMainExitSearchBarComponent
  ],
  templateUrl: './entrada-salida-main-exit.component.html',
})
export class EntradaSalidaMainExitComponent {

}
