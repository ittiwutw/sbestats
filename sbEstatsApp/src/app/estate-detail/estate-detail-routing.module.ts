import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstateDetailPage } from './estate-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EstateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateDetailPageRoutingModule {}
