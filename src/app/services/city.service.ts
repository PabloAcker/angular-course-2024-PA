import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citiesKey = 'cities';
  private citiesUrl = '/assets/cities.json';

  // Cargar ciudades ordenadas desde localStorage o desde el archivo JSON
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

  // Cargar el archivo JSON inicial de ciudades
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

  // Agregar una ciudad si no existe y ordenar al guardar
  async addCity(cityName: string): Promise<boolean> {
    const cities = await this.getCities();
    if (cities.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      return false;
    }
    const newCity = { id: cities.length + 1, name: cityName };
    cities.push(newCity);
    this.saveCitiesToLocalStorage(cities);
    return true;
  }

  // Eliminar una ciudad por nombre
  async deleteCity(cityName: string) {
    const cities = await this.getCities();
    const updatedCities = cities.filter(city => city.name.toLowerCase() !== cityName.toLowerCase());
    this.saveCitiesToLocalStorage(updatedCities);
  }

  // Buscar ciudades por nombre y devolver los resultados filtrados
  async searchCities(query: string): Promise<{ id: number; name: string }[]> {
    const cities = await this.getCities();
    return cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
  }

  // Guardar las ciudades en localStorage de forma ordenada
  private saveCitiesToLocalStorage(cities: { id: number; name: string }[]) {
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem(this.citiesKey, JSON.stringify(sortedCities));
  }
}
