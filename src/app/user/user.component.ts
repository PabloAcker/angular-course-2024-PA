import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user: any;  // Recibe la información del usuario
  @Output() onCloseAccount = new EventEmitter<void>();
  @Output() onChangeSubscription = new EventEmitter<string>();

  activeTab: string = 'user';  // Tab inicial es la del usuario

  // Cambia la pestaña activa
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Cambiar el tipo de suscripción
  changeSubscription(type: string) {
    if (type === 'premium' && this.user.amountAvailable <= 0) {
      alert('You do not have enough funds to upgrade to Premium');
      return;
    }

    this.user.subscriptionType = type;
    this.onChangeSubscription.emit(type);
  }

  // Cierra la cuenta del usuario
  closeAccount() {
    this.onCloseAccount.emit();
  }
}
