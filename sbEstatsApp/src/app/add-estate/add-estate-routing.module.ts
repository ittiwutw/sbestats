import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEstatePage } from './add-estate.page';

const routes: Routes = [
  {
    path: '',
    component: AddEstatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEstatePageRoutingModule {}
