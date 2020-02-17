import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieAlteredcarbonPage } from './movie-alteredcarbon.page';

const routes: Routes = [
  {
    path: '',
    component: MovieAlteredcarbonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieAlteredcarbonPageRoutingModule {}
