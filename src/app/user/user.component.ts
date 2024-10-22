import { Component, Input, Output, EventEmitter } from '@angular/core';
import { socialNetworks } from '../data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: any;
  @Output() onChangeSubscription = new EventEmitter<string>();
  @Output() onAddSubscription = new EventEmitter<number>();
  @Output() onRemoveSubscription = new EventEmitter<number>();
  @Output() onCloseAccount = new EventEmitter<void>();
  
  availableNetworks = socialNetworks.filter(sn => !this.user.subscriptions.includes(sn.id));  // Filtrar redes a las que no está suscrito
  
  changeSubscription(type: string) {
    if (type === 'premium' && this.user.amountAvailable <= 0) {
      alert('Not enough balance for Premium subscription.');
      return;
    }
    this.onChangeSubscription.emit(type);
  }

  addSubscription(networkId: number) {
    this.onAddSubscription.emit(networkId);
  }

  removeSubscription(networkId: number) {
    this.onRemoveSubscription.emit(networkId);
  }

  closeAccount() {
    this.onCloseAccount.emit();
  }
}
