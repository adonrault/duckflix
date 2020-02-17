import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrovideoPageRoutingModule } from './introvideo-routing.module';

import { IntrovideoPage } from './introvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrovideoPageRoutingModule
  ],
  declarations: [IntrovideoPage]
})
export class IntrovideoPageModule {}
