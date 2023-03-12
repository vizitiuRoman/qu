import { Component } from '@angular/core';
import '@qu/identity'
import '@qu/role'
import '@qu/appointment'
import '@qu/service'
import '@qu/staff'

@Component({
  selector: 'qu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
}
