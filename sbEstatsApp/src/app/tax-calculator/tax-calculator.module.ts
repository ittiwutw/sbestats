import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxCalculatorPageRoutingModule } from './tax-calculator-routing.module';

import { TaxCalculatorPage } from './tax-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxCalculatorPageRoutingModule
  ],
  declarations: [TaxCalculatorPage]
})
export class TaxCalculatorPageModule {}
