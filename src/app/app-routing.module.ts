import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'grid-menu', pathMatch: 'full'
  },
  { 
    path: 'grid-menu', loadChildren: () => import('./grid-menu/grid-menu.module').then(m => m.GridMenuPageModule)
  },
  { 
    path: 'ordenanza-de-trafico', loadChildren: () => import('./ordenanza-de-trafico/ordenanza-de-trafico.module').then(m => m.OrdenanzaDeTraficoPageModule)
  },
  { 
    path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'codificado-trafico',
    loadChildren: () => import('./codificado-trafico/codificado-trafico.module').then( m => m.CodificadoTraficoPageModule)
  },
  // Agrega aquí las rutas para las demás páginas que desees utilizar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
