import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieStrangerthingsPage } from './movie-strangerthings.page';

const routes: Routes = [
  {
    path: '',
    component: MovieStrangerthingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieStrangerthingsPageRoutingModule {}
