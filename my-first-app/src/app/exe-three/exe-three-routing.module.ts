import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExeThreeComponent } from './exe-three.component';

const routes: Routes = [{ path: '', component: ExeThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExeThreeRoutingModule { }
