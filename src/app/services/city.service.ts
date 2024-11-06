import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citiesKey = 'cities';
  private citiesUrl = '/assets/cities.json';

  async getCities(): Promise<{ id: number; name: string }[]> {
    const storedCities = localStorage.getItem(this.citiesKey);
    if (storedCities) {
      return JSON.parse(storedCities).sort((a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name)
      );
    } else {
      const initialCities = await this.loadInitialCities();
      localStorage.setItem(this.citiesKey, JSON.stringify(initialCities));
      return initialCities.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  private async loadInitialCities(): Promise<{ id: number; name: string }[]> {
    try {
      const response = await fetch(this.citiesUrl);
      if (!response.ok) throw new Error('Failed to load cities');
      return await response.json();
    } catch (error) {
      console.error('Error loading cities:', error);
      return [];
    }
  }

  async addCity(cityName: string): Promise<boolean> {
    const cities = await this.getCities();
    if (cities.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      return false;
    }
    const newCity = { id: this.getNextCityId(cities), name: cityName };
    cities.push(newCity);
    this.saveCitiesToLocalStorage(cities);
    return true;
  }

  async deleteCity(cityName: string) {
    const cities = await this.getCities();
    const updatedCities = cities.filter(city => city.name.toLowerCase() !== cityName.toLowerCase());
    this.saveCitiesToLocalStorage(updatedCities);
  }

  async searchCities(query: string): Promise<{ id: number; name: string }[]> {
    const cities = await this.getCities();
    return cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
  }

  private saveCitiesToLocalStorage(cities: { id: number; name: string }[]) {
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem(this.citiesKey, JSON.stringify(sortedCities));
  }

  private getNextCityId(cities: { id: number; name: string }[]): number {
    const maxId = cities.reduce((max, city) => Math.max(max, city.id), 0);
    return maxId + 1;
  }
}
