import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodificadoTraficoPage } from './codificado-trafico.page';

const routes: Routes = [
  {
    path: '',
    component: CodificadoTraficoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodificadoTraficoPageRoutingModule {}
