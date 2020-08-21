import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirExperenciaPageRoutingModule } from './compartir-experencia-routing.module';

import { CompartirExperenciaPage } from './compartir-experencia.page';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatMenuModule,
    MatIconModule,
    CompartirExperenciaPageRoutingModule
  ],
  declarations: [CompartirExperenciaPage]
})
export class CompartirExperenciaPageModule {}
