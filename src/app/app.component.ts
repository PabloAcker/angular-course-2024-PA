import { Component } from '@angular/core';
import { CityListComponent } from './city-list/city-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CityListComponent, HttpClientModule],
  template: `<app-city-list></app-city-list>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
