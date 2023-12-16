import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridMenuPage } from './grid-menu.page';

const routes: Routes = [
  {
    path: '',
    component: GridMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridMenuPageRoutingModule {}
