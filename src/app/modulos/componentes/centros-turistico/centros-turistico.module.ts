import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosTuristicoPageRoutingModule } from './centros-turistico-routing.module';

import { CentrosTuristicoPage } from './centros-turistico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosTuristicoPageRoutingModule
  ],
  declarations: [CentrosTuristicoPage]
})
export class CentrosTuristicoPageModule {}
