import { Component, EventEmitter, Output } from '@angular/core';
import { socialNetworks } from '../data'; 

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent {
  socialNetworks = socialNetworks;

  @Output() newNotification = new EventEmitter<{ networkId: number, platform: string }>();

  addNotification(network: any) {
    this.newNotification.emit({ networkId: network.id, platform: network.platform });
  }
}
