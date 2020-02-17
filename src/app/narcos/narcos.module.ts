import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NarcosPageRoutingModule } from './narcos-routing.module';

import { NarcosPage } from './narcos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NarcosPageRoutingModule
  ],
  declarations: [NarcosPage]
})
export class NarcosPageModule {}
