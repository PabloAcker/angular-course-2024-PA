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

  constructor(private cityService: CityService) {}

  async ngOnInit() {
    this.cities = await this.cityService.getCities();
  }

  async addCity() {
    if (this.newCityName.length > this.maxCityNameLength) {
      this.maxLengthMessage = `City name cannot exceed ${this.maxCityNameLength} characters.`;
      return;
    }
    
    this.maxLengthMessage = '';

    const success = await this.cityService.addCity(this.newCityName.trim());
    if (success) {
      this.cities = await this.cityService.getCities();
      this.newCityName = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'City already exists!';
    }
  }

  async deleteCity(cityName: string) {
    await this.cityService.deleteCity(cityName);
    this.cities = await this.cityService.getCities();
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
