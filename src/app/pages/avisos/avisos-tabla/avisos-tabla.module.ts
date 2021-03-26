import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisosTablaRoutingModule } from './avisos-tabla-routing.module';
import { AvisosTablaComponent } from './avisos-tabla.component';


@NgModule({
  declarations: [AvisosTablaComponent],
  imports: [
    CommonModule,
    AvisosTablaRoutingModule
  ]
})
export class AvisosTablaModule { }
