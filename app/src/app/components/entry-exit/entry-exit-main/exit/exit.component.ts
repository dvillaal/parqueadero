import { Component } from '@angular/core';
import {EntryExitMainHeaderComponent} from '../../../common/entry-exit-main-header/entry-exit-main-header.component';
import {ExitSearchBarComponent} from './exit-search-bar/exit-search-bar.component';
import {ExitVehicleInfoComponent} from './exit-vehicle-info/exit-vehicle-info.component';

@Component({
  selector: 'exit',
  imports: [
    EntryExitMainHeaderComponent,
    ExitSearchBarComponent,
    ExitVehicleInfoComponent
  ],
  templateUrl: './exit.component.html',
})
export class ExitComponent {

}
