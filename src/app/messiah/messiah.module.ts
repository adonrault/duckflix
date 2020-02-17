import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessiahPageRoutingModule } from './messiah-routing.module';

import { MessiahPage } from './messiah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessiahPageRoutingModule
  ],
  declarations: [MessiahPage]
})
export class MessiahPageModule {}
