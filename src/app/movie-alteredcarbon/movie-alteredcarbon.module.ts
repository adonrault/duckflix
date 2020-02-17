import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieAlteredcarbonPageRoutingModule } from './movie-alteredcarbon-routing.module';

import { MovieAlteredcarbonPage } from './movie-alteredcarbon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieAlteredcarbonPageRoutingModule
  ],
  declarations: [MovieAlteredcarbonPage]
})
export class MovieAlteredcarbonPageModule {}
