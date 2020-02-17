import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieReasonswhyPage } from './movie-reasonswhy.page';

const routes: Routes = [
  {
    path: '',
    component: MovieReasonswhyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieReasonswhyPageRoutingModule {}
