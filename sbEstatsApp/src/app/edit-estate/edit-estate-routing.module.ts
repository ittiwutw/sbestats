import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEstatePage } from './edit-estate.page';

const routes: Routes = [
  {
    path: '',
    component: EditEstatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEstatePageRoutingModule {}
