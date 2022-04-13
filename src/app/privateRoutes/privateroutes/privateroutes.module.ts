import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateroutesRoutingModule } from './privateroutes-routing.module';
import { PrivateroutesComponent } from './privateroutes.component';


@NgModule({
  declarations: [
    PrivateroutesComponent
  ],
  imports: [
    CommonModule,
    PrivateroutesRoutingModule
  ]
})
export class PrivateroutesModule { }
