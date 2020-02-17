import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieArrowPage } from './movie-arrow.page';

const routes: Routes = [
  {
    path: '',
    component: MovieArrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieArrowPageRoutingModule {}
