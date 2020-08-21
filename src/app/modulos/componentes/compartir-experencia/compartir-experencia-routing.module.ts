import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirExperenciaPage } from './compartir-experencia.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirExperenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirExperenciaPageRoutingModule {}
