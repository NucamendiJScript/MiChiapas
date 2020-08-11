import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosTuristicoPage } from './centros-turistico.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosTuristicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosTuristicoPageRoutingModule {}
