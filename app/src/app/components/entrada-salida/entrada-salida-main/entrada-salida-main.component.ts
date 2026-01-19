import { Component } from '@angular/core';
import {
  EntradaSalidaMainEntryComponent
} from './entrada-salida-main-entry/entrada-salida-main-entry.component';
import {EntradaSalidaMainExitComponent} from './entrada-salida-main-exit/entrada-salida-main-exit.component';

@Component({
  selector: 'app-entrada-salida-main',
  imports: [
    EntradaSalidaMainEntryComponent,
    EntradaSalidaMainExitComponent
  ],
  templateUrl: './entrada-salida-main.component.html',
})
export class EntradaSalidaMainComponent {

}
