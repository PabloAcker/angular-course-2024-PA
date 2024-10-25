import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from '../data';  // Asegúrate de importar correctamente

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() notifications: string[] = [];

  // Obtiene el color correspondiente a la red social
  getNotificationColor(notification: string): string {
    const platform = this.extractPlatform(notification);
    const network = socialNetworks.find(sn => sn.platform === platform);
    return network ? this.getPlatformColor(platform) : '#f4f4f4';
  }

  getPlatformColor(platform: string): string {
    switch (platform) {
      case 'youtube':
        return '#FFCCCC'; // Rojo claro
      case 'facebook':
        return '#CCCCFF'; // Azul claro
      case 'instagram':
        return '#FFD1DC'; // Rosa claro
      case 'tiktok':
        return '#D6C1FF'; // Púrpura claro
      case 'whatsapp':
        return '#CCFFCC'; // Verde claro
      default:
        return '#ddd'; // Color por defecto
    }
  }

  extractPlatform(notification: string): string {
    if (notification.includes('youtube')) return 'youtube';
    if (notification.includes('facebook')) return 'facebook';
    if (notification.includes('instagram')) return 'instagram';
    if (notification.includes('tiktok')) return 'tiktok';
    if (notification.includes('whatsapp')) return 'whatsapp';
    return '';
  }
}
