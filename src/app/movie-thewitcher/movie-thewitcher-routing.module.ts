import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieThewitcherPage } from './movie-thewitcher.page';

const routes: Routes = [
  {
    path: '',
    component: MovieThewitcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieThewitcherPageRoutingModule {}
