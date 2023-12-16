import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodificadoTraficoPageRoutingModule } from './codificado-trafico-routing.module';

import { CodificadoTraficoPage } from './codificado-trafico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodificadoTraficoPageRoutingModule
  ],
  declarations: [CodificadoTraficoPage]
})
export class CodificadoTraficoPageModule {}
