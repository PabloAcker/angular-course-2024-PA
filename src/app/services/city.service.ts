import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citiesKey = 'cities';
  private citiesUrl = '/assets/cities.json';  // Ruta a cities.json en public/assets

  constructor(private http: HttpClient) {}

  // Obtener ciudades del localStorage o cargar desde cities.json
  getCities(): { id: number; name: string }[] {
    const storedCities = localStorage.getItem(this.citiesKey);
    if (storedCities) {
      return JSON.parse(storedCities);
    } else {
      this.loadInitialCities();
      return [];
    }
  }

  // Cargar ciudades iniciales de cities.json y guardarlas en localStorage
  private loadInitialCities() {
    this.http.get<{ id: number; name: string }[]>(this.citiesUrl)
      .pipe(
        catchError(() => of([]))  // Si hay un error, retorna una lista vacía
      )
      .subscribe(cities => {
        localStorage.setItem(this.citiesKey, JSON.stringify(cities));
      });
  }

  addCity(cityName: string): boolean {
    const cities = this.getCities();
    if (cities.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      return false;
    }
    const newCity = { id: cities.length + 1, name: cityName };
    cities.push(newCity);
    localStorage.setItem(this.citiesKey, JSON.stringify(cities));
    return true;
  }

  deleteCity(cityName: string) {
    let cities = this.getCities();
    cities = cities.filter(city => city.name.toLowerCase() !== cityName.toLowerCase());
    localStorage.setItem(this.citiesKey, JSON.stringify(cities));
  }

  searchCities(query: string): { id: number; name: string }[] {
    const cities = this.getCities();
    return cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
  }
}
