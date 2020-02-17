import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDraculaPage } from './movie-dracula.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDraculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDraculaPageRoutingModule {}
