import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { data } from './data'; // Datos de los usuarios y redes sociales

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SocialNetworksComponent, UserComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-2024';
  users = Object.values(data);  // Cargar los datos de los usuarios desde el archivo data.ts

  // Lógica para manejar las notificaciones de las redes sociales
  handleNewNotification(event: { networkId: number, platform: string }) {
    this.users.forEach(user => {
      if (user.subscriptions.includes(event.networkId)) {
        // Lógica para usuarios Free y Premium
        if (user.subscriptionType === 'premium') {
          // Si es Premium y está suscrito a una app Premium, le llega la notificación
          user.notifications.push(`${event.platform} added a new ${event.platform === 'whatsapp' ? 'message' : 'video/story'}`);

          // Si la notificación es de una app Premium (TikTok o WhatsApp), se descuenta $5
          if ([3, 5].includes(event.networkId)) {
            user.amountAvailable -= 5;

            // Si el saldo llega a 0 o menos, cambiar a Free
            if (user.amountAvailable <= 0) {
              user.subscriptionType = 'free';
              user.amountAvailable = 0;  // Asegurarse de que no quede saldo negativo
            }
          }
        } else if (user.subscriptionType === 'free' && ![3, 5].includes(event.networkId)) {
          // Si es Free y no es una app Premium, recibe notificaciones solo de apps Free
          user.notifications.push(`${event.platform} added a new ${event.platform === 'whatsapp' ? 'message' : 'video/story'}`);
        }
      }
    });
  }

  // Lógica para cambiar la suscripción del usuario
  handleSubscriptionChange(user: any, type: string) {
    user.subscriptionType = type;
  }

  // Lógica para agregar una nueva suscripción
  handleAddSubscription(user: any, networkId: number) {
    user.subscriptions.push(networkId);
  }

  // Lógica para eliminar una suscripción
  handleRemoveSubscription(user: any, networkId: number) {
    user.subscriptions = user.subscriptions.filter((id: number) => id !== networkId);
  }

  // Lógica para cerrar la cuenta de un usuario
  handleCloseAccount(user: any) {
    user.status = 'inactive';
  }
}