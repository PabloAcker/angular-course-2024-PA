import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductModule, ClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course-2024-PA';
  sumNumber = 5;
}