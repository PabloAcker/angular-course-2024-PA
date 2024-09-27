import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'history-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './history-calculator.component.html',
  styleUrl: './history-calculator.component.scss'
})
export class HistoryCalculatorComponent {
  @Input() history: string[] = [];
}
