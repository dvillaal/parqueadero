import { Component } from '@angular/core';
import {EntryExitHeaderComponent} from '../../components/entry-exit/entry-exit-header/entry-exit-header.component';
import {EntryExitMainComponent} from '../../components/entry-exit/entry-exit-main/entry-exit-main.component';

@Component({
  selector: 'app-entry-exit',
  imports: [
    EntryExitHeaderComponent,
    EntryExitMainComponent
  ],
  templateUrl: './entry-exit.component.html',
})
export default class EntryExitComponent {

}
