import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieBcsPage } from './movie-bcs.page';

const routes: Routes = [
  {
    path: '',
    component: MovieBcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieBcsPageRoutingModule {}
