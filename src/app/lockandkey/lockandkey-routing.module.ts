import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockandkeyPage } from './lockandkey.page';

const routes: Routes = [
  {
    path: '',
    component: LockandkeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockandkeyPageRoutingModule {}
