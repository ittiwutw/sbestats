import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEstatePageRoutingModule } from './add-estate-routing.module';

import { AddEstatePage } from './add-estate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEstatePageRoutingModule
  ],
  declarations: [AddEstatePage]
})
export class AddEstatePageModule {}
