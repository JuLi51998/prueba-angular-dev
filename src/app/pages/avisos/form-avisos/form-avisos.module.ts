import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAvisosRoutingModule } from './form-avisos-routing.module';
import { FormAvisosComponent } from './form-avisos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormAvisosComponent],
  imports: [
    CommonModule,
    FormAvisosRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormAvisosModule { }
