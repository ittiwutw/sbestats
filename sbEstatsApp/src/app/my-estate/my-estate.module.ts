import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEstatePageRoutingModule } from './my-estate-routing.module';

import { MyEstatePage } from './my-estate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyEstatePageRoutingModule
  ],
  declarations: [MyEstatePage]
})
export class MyEstatePageModule {}
