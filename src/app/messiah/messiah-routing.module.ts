import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessiahPage } from './messiah.page';

const routes: Routes = [
  {
    path: '',
    component: MessiahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessiahPageRoutingModule {}
