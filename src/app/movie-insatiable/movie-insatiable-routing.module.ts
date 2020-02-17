import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieInsatiablePage } from './movie-insatiable.page';

const routes: Routes = [
  {
    path: '',
    component: MovieInsatiablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieInsatiablePageRoutingModule {}
