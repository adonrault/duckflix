import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockandkeyPageRoutingModule } from './lockandkey-routing.module';

import { LockandkeyPage } from './lockandkey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockandkeyPageRoutingModule
  ],
  declarations: [LockandkeyPage]
})
export class LockandkeyPageModule {}
