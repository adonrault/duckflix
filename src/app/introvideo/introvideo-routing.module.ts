import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrovideoPage } from './introvideo.page';

const routes: Routes = [
  {
    path: '',
    component: IntrovideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrovideoPageRoutingModule {}
