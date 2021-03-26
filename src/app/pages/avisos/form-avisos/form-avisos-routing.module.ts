import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAvisosComponent } from './form-avisos.component';

const routes: Routes = [{ path: '', component: FormAvisosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAvisosRoutingModule { }
