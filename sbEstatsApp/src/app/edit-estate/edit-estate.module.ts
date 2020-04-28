import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEstatePageRoutingModule } from './edit-estate-routing.module';

import { EditEstatePage } from './edit-estate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEstatePageRoutingModule
  ],
  declarations: [EditEstatePage]
})
export class EditEstatePageModule {}
