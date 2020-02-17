import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDaybreakPage } from './movie-daybreak.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDaybreakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDaybreakPageRoutingModule {}
