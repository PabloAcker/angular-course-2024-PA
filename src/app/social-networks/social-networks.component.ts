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
export class SocialNetworkComponent {
  socialNetworks = socialNetworks;

  @Output() newNotification = new EventEmitter<{ networkId: number, platform: string }>();

  addNotification(socialNetwork: any) {
    this.newNotification.emit({ networkId: socialNetwork.id, platform: socialNetwork.platform });
  }

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
        return '#ddd';
    }
  }
}
