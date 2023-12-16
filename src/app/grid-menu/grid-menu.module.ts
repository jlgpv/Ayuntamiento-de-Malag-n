import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridMenuPageRoutingModule } from './grid-menu-routing.module';

import { GridMenuPage } from './grid-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridMenuPageRoutingModule
  ],
  declarations: [GridMenuPage]
})
export class GridMenuPageModule {}
