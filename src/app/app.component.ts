import { Component } from '@angular/core';
import { data } from './data';  // Usamos el objeto `data` proporcionado en `data.ts`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = Object.values(data);

  handleNewNotification(event: { networkId: number, platform: string }) {
    this.users.forEach(user => {
      if (user.subscriptions.includes(event.networkId)) {
        user.notifications.push(`${event.platform} added a new ${event.platform === 'whatsapp' ? 'message' : 'video/story'}`);
        if (user.subscriptionType === 'premium' && [3, 5].includes(event.networkId)) {
          user.amountAvailable -= 5;
          if (user.amountAvailable <= 0) {
            user.subscriptionType = 'free';
          }
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
