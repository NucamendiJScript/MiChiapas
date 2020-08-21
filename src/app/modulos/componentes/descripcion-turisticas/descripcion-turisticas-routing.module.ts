import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionTuristicasPage } from './descripcion-turisticas.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionTuristicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionTuristicasPageRoutingModule {}
