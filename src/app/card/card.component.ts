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

  get filteredMessages() {
    return this.item.messages.filter((msg: string) => msg.toLowerCase().includes(this.messageSearchQuery.toLowerCase()));
  }

  switchTab(tab: string) {
    this.currentTab = tab;
  }

  searchMessages(query: string) {
    this.messageSearchQuery = query;
  }
}
