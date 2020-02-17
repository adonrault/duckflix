import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieThepunisherPage } from './movie-thepunisher.page';

const routes: Routes = [
  {
    path: '',
    component: MovieThepunisherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieThepunisherPageRoutingModule {}
