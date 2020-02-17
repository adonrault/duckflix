import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieBreakingbadPage } from './movie-breakingbad.page';

const routes: Routes = [
  {
    path: '',
    component: MovieBreakingbadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieBreakingbadPageRoutingModule {}
