import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExeThreeRoutingModule } from './exe-three-routing.module';
import { ExeThreeComponent } from './exe-three.component';


@NgModule({
  declarations: [
    ExeThreeComponent
  ],
  imports: [
    CommonModule,
    ExeThreeRoutingModule
  ]
})
export class ExeThreeModule { }
