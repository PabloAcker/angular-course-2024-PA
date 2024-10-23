import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './social-networks/social-networks.component';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { data } from './data'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SocialNetworkComponent, UserComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = Object.values(data);

  handleNewNotification(event: { networkId: number, platform: string }) {
    this.users.forEach(user => {
      if (user.subscriptions.includes(event.networkId)) {
        if (user.subscriptionType === 'premium') {
          user.notifications.push(`${event.platform} added a new ${event.platform === 'whatsapp' ? 'message' : 'video/story'}`);

          if ([3, 5].includes(event.networkId)) {
            user.amountAvailable -= 5;
            if (user.amountAvailable <= 0) {
              user.subscriptionType = 'free';
              user.amountAvailable = 0;
            }
          }
        } else if (user.subscriptionType === 'free' && ![3, 5].includes(event.networkId)) {
          user.notifications.push(`${event.platform} added a new ${event.platform === 'whatsapp' ? 'message' : 'video/story'}`);
        }
      }
    });
  }

  handleSubscriptionChange(user: any, type: string) {
    user.subscriptionType = type;
  }

  handleAddSubscription(user: any, networkId: number) {
    user.subscriptions.push(networkId);
  }

  handleRemoveSubscription(user: any, networkId: number) {
    user.subscriptions = user.subscriptions.filter((id: number) => id !== networkId);
  }

  handleCloseAccount(user: any) {
    user.status = 'inactive';
  }
}
