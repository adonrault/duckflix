import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDynastiePage } from './movie-dynastie.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDynastiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDynastiePageRoutingModule {}
