import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'person',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() gender: string = '';

  get hasDiscount(): boolean {
    return this.age > 18;
  }
}
