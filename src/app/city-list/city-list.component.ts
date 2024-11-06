import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities: { id: number; name: string }[] = [];
  newCityName: string = '';
  searchQuery: string = '';
  errorMessage: string = '';
  maxLengthMessage: string = '';
  maxCityNameLength = 20;
  latestCityId: number | null = null;

  constructor(private cityService: CityService) {}

  async ngOnInit() {
    this.cities = await this.cityService.getCities();
  }

  async addCity() {
    if (this.newCityName.length > this.maxCityNameLength) {
      this.maxLengthMessage = `City name cannot exceed ${this.maxCityNameLength} characters.`;
      return;
    }

    if (this.newCityName.trim() === '') {
      this.errorMessage = 'City name cannot be empty!';
      return;
    }

    this.maxLengthMessage = '';
    this.errorMessage = '';

    const success = await this.cityService.addCity(this.newCityName.trim());
    if (success) {
      this.cities = await this.cityService.getCities();
      const newlyAddedCity = this.cities.find(city => city.name.toLowerCase() === this.newCityName.trim().toLowerCase());
      this.latestCityId = newlyAddedCity ? newlyAddedCity.id : null;
      this.newCityName = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'City already exists!';
    }
  }

  async deleteCity(cityName: string) {
    await this.cityService.deleteCity(cityName);
    this.cities = await this.cityService.getCities();
    if (this.cities.length > 0) {
      const lastAddedCity = this.cities.find(city => city.id === this.latestCityId);
      this.latestCityId = lastAddedCity ? lastAddedCity.id : null;
    } else {
      this.latestCityId = null;
    }
  }

  async searchCities() {
    this.errorMessage = '';
    if (this.searchQuery) {
      this.cities = await this.cityService.searchCities(this.searchQuery);
    } else {
      this.cities = await this.cityService.getCities();
    }
  }
}
