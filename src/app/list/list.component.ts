import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../app.component';  // Asegúrate de importar la interfaz Person
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: Person[] = [];  // Cambiamos a usar la interfaz Person
  @Output() showItem = new EventEmitter<Person>();
  @Output() deleteItem = new EventEmitter<Person>();  // Ahora emitimos Person en lugar de un número

  // Emitir el objeto completo cuando se hace clic en "Show"
  onShow(item: Person) {
    this.showItem.emit(item);
  }

  // Emitir el objeto completo cuando se hace clic en "Delete"
  onDelete(item: Person) {
    this.deleteItem.emit(item);  // Emitimos el objeto Person completo en lugar del ID
  }
}
