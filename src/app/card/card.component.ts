import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: any;
  currentTab: string = 'Personal';
  messageSearchQuery: string = '';
  messages: string[] = [
    'The next exam will be next week, make sure to prepare.',
    'Remember, the exam will take place in the library.',
    'Don\'t forget to bring your identification.',
    'Check the exam schedule.',
    'Send the course summary to the administration.'
  ];

  get filteredMessages() {
    return this.messages.filter(msg => msg.toLowerCase().includes(this.messageSearchQuery.toLowerCase()));
  }

  switchTab(tab: string) {
    this.currentTab = tab;
  }

  searchMessages(query: string) {
    this.messageSearchQuery = query;
  }
}
