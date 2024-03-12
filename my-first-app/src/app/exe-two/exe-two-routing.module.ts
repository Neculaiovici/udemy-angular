import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExeTwoComponent } from './exe-two.component';

const routes: Routes = [{ path: '', component: ExeTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExeTwoRoutingModule { }
