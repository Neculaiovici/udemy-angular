import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExeTwoRoutingModule } from './exe-two-routing.module';
import { ExeTwoComponent } from './exe-two.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExeTwoComponent
  ],
  imports: [
    CommonModule,
    ExeTwoRoutingModule,
    FormsModule
  ]
})
export class ExeTwoModule { }
