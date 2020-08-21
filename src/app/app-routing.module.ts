import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modulos/componentes/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'centros-turistico',
    loadChildren: () => import('./modulos/componentes/centros-turistico/centros-turistico.module').then( m => m.CentrosTuristicoPageModule)
  },
  {
    path: 'descripcion-turisticas',
    loadChildren: () => import('./modulos/componentes/descripcion-turisticas/descripcion-turisticas.module').then( m => m.DescripcionTuristicasPageModule)
  },
  {
    path: 'compartir-experencia',
    loadChildren: () => import('./modulos/componentes/compartir-experencia/compartir-experencia.module').then( m => m.CompartirExperenciaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
