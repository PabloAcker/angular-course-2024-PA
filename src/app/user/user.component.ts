import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from '../data';  // Asegúrate de importar el archivo correcto de data

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user: any;
  @Output() onCloseAccount = new EventEmitter<void>();
  @Output() onChangeSubscription = new EventEmitter<string>();
  @Output() onAddSubscription = new EventEmitter<number>();
  @Output() onRemoveSubscription = new EventEmitter<number>();

  activeTab: string = 'user';
  socialNetworks = socialNetworks;

  // Colores asociados a las redes sociales
  networkColors: { [key: string]: string } = {
    youtube: '#FF0000',
    facebook: '#3b5998',
    instagram: '#C13584',
    tiktok: '#000000',
    whatsapp: '#25D366',
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  changeSubscription(type: string) {
    if (type === 'premium' && this.user.amountAvailable <= 0) {
      alert('You do not have enough funds to upgrade to Premium');
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

  getAvailableNetworks() {
    return this.socialNetworks.filter(sn => !this.user.subscriptions.includes(sn.id));
  }

  getSubscribedNetworks() {
    return this.socialNetworks.filter(sn => this.user.subscriptions.includes(sn.id));
  }

  getNetworkColor(platform: string): string {
    return this.networkColors[platform] || '#ddd';
  }
}