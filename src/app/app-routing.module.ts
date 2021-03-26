
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'avisos', loadChildren: () => import('./pages/avisos/form-avisos/form-avisos.module').then(m => m.FormAvisosModule) }, { path: 'avisos-tabla', loadChildren: () => import('./pages/avisos/avisos-tabla/avisos-tabla.module').then(m => m.AvisosTablaModule) }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
