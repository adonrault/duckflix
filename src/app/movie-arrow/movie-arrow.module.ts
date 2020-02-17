import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieArrowPageRoutingModule } from './movie-arrow-routing.module';

import { MovieArrowPage } from './movie-arrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieArrowPageRoutingModule
  ],
  declarations: [MovieArrowPage]
})
export class MovieArrowPageModule {}
