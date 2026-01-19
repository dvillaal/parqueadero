import {Component, input} from '@angular/core';

@Component({
  selector: 'app-entrada-salida-main-header',
  imports: [],
  templateUrl: './entrada-salida-main-header.component.html',
  styles: ``
})
export class EntradaSalidaMainHeaderComponent {

  icon = input.required<string>()
  label = input.required<string>()

}
