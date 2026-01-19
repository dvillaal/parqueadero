import { Component } from '@angular/core';
import {FooterComponent} from '../../components/common/footer/footer.component';
import {NavbarComponent} from '../../components/common/navbar/navbar.component';
import {
  EntradaSalidaHeaderComponent
} from '../../components/entrada-salida/entrada-salida-header/entrada-salida-header.component';
import {
  EntradaSalidaMainComponent
} from '../../components/entrada-salida/entrada-salida-main/entrada-salida-main.component';

@Component({
  selector: 'app-entrada-salida',
  imports: [
    EntradaSalidaHeaderComponent,
    EntradaSalidaMainComponent
  ],
  templateUrl: './entrada-salida.component.html',
})
export default class EntradaSalidaComponent {

}
