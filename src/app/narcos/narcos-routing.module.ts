import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarcosPage } from './narcos.page';

const routes: Routes = [
  {
    path: '',
    component: NarcosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NarcosPageRoutingModule {}
