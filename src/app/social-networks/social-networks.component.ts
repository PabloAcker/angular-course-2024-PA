import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from '../data';  // Importar correctamente los datos desde data.ts

@Component({
  selector: 'app-social-networks',  // Asegúrate de que el selector sea correcto
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
  socialNetworks = socialNetworks;  // Asignar los datos de redes sociales

  @Output() newNotification = new EventEmitter<{ networkId: number, platform: string }>();  // Emitir un evento para la nueva notificación

  // Método para agregar una notificación
  addNotification(socialNetwork: any) {
    this.newNotification.emit({ networkId: socialNetwork.id, platform: socialNetwork.platform });
  }

  // Método para asignar colores a las plataformas sociales
  getNetworkColor(socialNetwork: any): string {
    switch (socialNetwork.platform) {
      case 'youtube':
        return '#FF0000';
      case 'facebook':
        return '#3b5998';
      case 'instagram':
        return '#C13584';
      case 'tiktok':
        return '#000000';
      case 'whatsapp':
        return '#25D366';
      default:
        return '#ddd';  // Color por defecto
    }
  }
}