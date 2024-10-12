import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../app.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: Person[] = [];
  @Output() showItem = new EventEmitter<Person>();
  @Output() deleteItem = new EventEmitter<Person>();

  onShow(item: Person) {
    this.showItem.emit(item);
  }

  onDelete(item: Person) {
    this.deleteItem.emit(item);  
  }
}
