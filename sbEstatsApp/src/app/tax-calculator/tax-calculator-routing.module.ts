import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxCalculatorPage } from './tax-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: TaxCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxCalculatorPageRoutingModule {}
