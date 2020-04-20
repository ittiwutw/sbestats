import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyPageRoutingModule } from './nearby-routing.module';

import { NearbyPage } from './nearby.page';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [NearbyPage]
})
export class NearbyPageModule {}
