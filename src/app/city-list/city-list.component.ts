import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities: { id: number; name: string }[] = [];
  newCityName: string = '';
  searchQuery: string = '';
  errorMessage: string = '';

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    // Cargar ciudades al iniciar el componente
    this.cities = this.cityService.getCities();
  }

  addCity() {
    if (this.cityService.addCity(this.newCityName)) {
      this.cities = this.cityService.getCities();
      this.newCityName = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'City already exists!';
    }
  }

  deleteCity(cityName: string) {
    this.cityService.deleteCity(cityName);
    this.cities = this.cityService.getCities();
  }

  searchCities() {
    this.cities = this.cityService.searchCities(this.searchQuery);
  }
}
