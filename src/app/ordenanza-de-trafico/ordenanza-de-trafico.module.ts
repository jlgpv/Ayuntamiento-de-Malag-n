import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenanzaDeTraficoPageRoutingModule } from './ordenanza-de-trafico-routing.module';

import { OrdenanzaDeTraficoPage } from './ordenanza-de-trafico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenanzaDeTraficoPageRoutingModule
  ],
  declarations: [OrdenanzaDeTraficoPage]
})
export class OrdenanzaDeTraficoPageModule {}



