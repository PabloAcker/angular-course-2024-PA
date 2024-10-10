import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../app.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() person!: Person;
  @Output() show = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onShow() {
    this.show.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
