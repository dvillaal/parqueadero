import { Component } from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import {ExitComponent} from './exit/exit.component';

@Component({
  selector: 'app-entry-exit-main',
  imports: [
    EntryComponent,
    ExitComponent
  ],
  templateUrl: './entry-exit-main.component.html',
})
export class EntryExitMainComponent {

}
