import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenanzaDeTraficoPage } from './ordenanza-de-trafico.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenanzaDeTraficoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenanzaDeTraficoPageRoutingModule {}
