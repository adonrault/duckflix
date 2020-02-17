import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDarkPageRoutingModule } from './movie-dark-routing.module';

import { MovieDarkPage } from './movie-dark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDarkPageRoutingModule
  ],
  declarations: [MovieDarkPage]
})
export class MovieDarkPageModule {}
