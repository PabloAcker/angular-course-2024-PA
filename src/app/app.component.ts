import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { data } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SocialNetworksComponent, UserComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = Object.values(data);
  title = 'angular-course-2024-pa';

  handleNewNotification(event: { networkId: number, platform: string }) {
    this.users.forEach(user => {
      if (user.subscriptions.includes(event.networkId)) {
        if (user.subscriptionType === 'premium' || ![3, 5].includes(event.networkId)) { // Solo premium pueden recibir TikTok y WhatsApp
          user.notifications.push(`${event.platform} added a new ${event.platform === 'whatsapp' ? 'message' : 'video/story'}`);
          if (user.subscriptionType === 'premium' && [3, 5].includes(event.networkId)) {
            user.amountAvailable -= 5;
            if (user.amountAvailable <= 0) {
              user.subscriptionType = 'free';  // Cambia a free si no tiene saldo
            }
          }
        }
      }
    });
  }

  handleSubscriptionChange(user: any, type: string) {
    if (type === 'premium' && user.amountAvailable > 0) {
      user.subscriptionType = type;
    } else if (type === 'free') {
      user.subscriptionType = type;
    }
  }

  handleAddSubscription(user: any, networkId: any) {
    if (!user.subscriptions.includes(networkId)) {
      user.subscriptions.push(networkId);
    }
  }

  handleRemoveSubscription(user: any, networkId: any) {
    user.subscriptions = user.subscriptions.filter((id: number) => id !== networkId);
  }

  handleCloseAccount(user: any) {
    user.status = 'inactive';
  }
}
