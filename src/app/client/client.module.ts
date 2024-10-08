import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProviderModule } from '../provider/provider.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ProviderModule
  ],
  exports: [
  ]
})
export class ClientModule { }
