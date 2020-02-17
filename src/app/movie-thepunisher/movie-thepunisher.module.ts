import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieThepunisherPageRoutingModule } from './movie-thepunisher-routing.module';

import { MovieThepunisherPage } from './movie-thepunisher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieThepunisherPageRoutingModule
  ],
  declarations: [MovieThepunisherPage]
})
export class MovieThepunisherPageModule {}
