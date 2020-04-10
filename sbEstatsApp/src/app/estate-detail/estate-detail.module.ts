import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstateDetailPageRoutingModule } from './estate-detail-routing.module';

import { EstateDetailPage } from './estate-detail.page';
import { ModalPage } from '../modal/modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstateDetailPageRoutingModule
  ],
  declarations: [EstateDetailPage]
})
export class EstateDetailPageModule {}
