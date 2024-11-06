import { Component } from '@angular/core';
import { CityListComponent } from './city-list/city-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CityListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalTest-angular-2024-PA';
}
