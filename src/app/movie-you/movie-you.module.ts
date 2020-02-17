import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieYouPageRoutingModule } from './movie-you-routing.module';

import { MovieYouPage } from './movie-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieYouPageRoutingModule
  ],
  declarations: [MovieYouPage]
})
export class MovieYouPageModule {}
