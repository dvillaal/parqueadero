import { Component } from '@angular/core';
import {EntryPlateComponent} from './entry-plate/entry-plate.component';
import {EntryVehicleTypeComponent} from './entry-vehicle-type/entry-vehicle-type.component';
import {EntrySubmitButtonComponent} from './entry-submit-button/entry-submit-button.component';
import {EntryExitMainHeaderComponent} from '../../../common/entry-exit-main-header/entry-exit-main-header.component';

@Component({
  selector: 'entry',
  imports: [
    EntryPlateComponent,
    EntryVehicleTypeComponent,
    EntrySubmitButtonComponent,
    EntryExitMainHeaderComponent
  ],
  templateUrl: './entry.component.html',
  styles: ``
})
export class EntryComponent {

}
