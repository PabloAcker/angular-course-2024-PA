import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1Component } from './provider1/provider1.component';
import { Provider2Component } from './provider2/provider2.component';



@NgModule({
  declarations: [Provider1Component, Provider2Component],
  imports: [
    CommonModule
  ],
  exports: [
    Provider1Component,
    Provider2Component
  ]
})
export class ProviderModule { }
