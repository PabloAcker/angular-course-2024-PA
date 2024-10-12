import { Component } from '@angular/core';
import { data } from './data';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent, ItemComponent, ListComponent, SearchComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-course-2024-PA';
  
  items: Person[] = Object.values(data).map(person => ({
    ...person,
    type: person.type === 'student' ? 'student' : 'professor'
  }));
  
  filteredItems: Person[] = [...this.items];  // Inicializa con todos los ítems
  selectedItem: Person | null = null;  // Item seleccionado
  searchQuery: string = '';

  // Método para filtrar ítems
  searchItems(query: string) {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Método para mostrar detalles de un ítem
  showItem(item: Person) {
    this.selectedItem = item;
  }

  // Método para eliminar un ítem, ahora esperando el objeto Person completo
  deleteItem(item: Person) {
    this.items = this.items.filter(i => i !== item);
    this.filteredItems = [...this.items];  // Actualizamos el filtrado
    this.selectedItem = null;  // Deselecciona si el ítem eliminado está siendo mostrado
  }

  ngOnInit() {
    console.log('AppComponent initialized');
  }
}


export interface Person {
  name: string;
  lastName: string;
  type: 'student' | 'professor'; 
  firstTestScore?: number;
  secondTestScore?: number;
  finalTestScore?: number;
  subject?: string; 
  address: {
    number: string;
    street: string;
    zone: string;
  };
  country: string;
  province: string;
  messages: string[];
}
