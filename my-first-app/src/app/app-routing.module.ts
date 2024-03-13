import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'exe-two', loadChildren: () => import('./exe-two/exe-two.module').then(m => m.ExeTwoModule) },
    { path: 'exe-three', loadChildren: () => import('./exe-three/exe-three.module').then(m => m.ExeThreeModule) }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}