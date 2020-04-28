import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEstatePage } from './my-estate.page';

const routes: Routes = [
  {
    path: '',
    component: MyEstatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyEstatePageRoutingModule {}
