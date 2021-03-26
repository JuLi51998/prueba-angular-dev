import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosTablaComponent } from './avisos-tabla.component';

const routes: Routes = [{ path: '', component: AvisosTablaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisosTablaRoutingModule { }
