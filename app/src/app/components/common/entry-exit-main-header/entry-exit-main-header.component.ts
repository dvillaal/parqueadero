import {Component, input} from '@angular/core';

@Component({
  selector: 'app-entry-exit-main-header',
  imports: [],
  templateUrl: './entry-exit-main-header.component.html',
  styles: ``
})
export class EntryExitMainHeaderComponent {

  icon = input.required<string>()
  label = input.required<string>()

}
