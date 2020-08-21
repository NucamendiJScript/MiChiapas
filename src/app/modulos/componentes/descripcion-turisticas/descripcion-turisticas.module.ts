import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionTuristicasPageRoutingModule } from './descripcion-turisticas-routing.module';

import { DescripcionTuristicasPage } from './descripcion-turisticas.page';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatMenuModule,
    MatIconModule,
    DescripcionTuristicasPageRoutingModule
  ],
  declarations: [DescripcionTuristicasPage]
})
export class DescripcionTuristicasPageModule {}
