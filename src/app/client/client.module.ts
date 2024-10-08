import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProviderModule } from '../provider/provider.module';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';



@NgModule({
  declarations: [Client1Component, Client2Component],
  imports: [
    CommonModule,
    SharedModule,
    ProviderModule
  ],
  exports: [
    Client1Component,
    Client2Component
  ]
})
export class ClientModule { }
