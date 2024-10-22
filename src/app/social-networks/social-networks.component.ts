import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from '../data';

@Component({
  selector: 'app-social-networks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
  socialNetworks = socialNetworks;

  @Output() newNotification = new EventEmitter<{ networkId: number, platform: string }>();  // Definir el Output correctamente

  // Método para emitir la notificación
  addNotification(socialNetwork: any) {
    this.newNotification.emit({ networkId: socialNetwork.id, platform: socialNetwork.platform });
  }

  // Método para obtener el color de fondo basado en si es premium o free
  getNetworkColor(socialNetwork: any): string {
    return socialNetwork.platformType === 'premium' ? '#6f42c1' : '#28a745';
  }
}
