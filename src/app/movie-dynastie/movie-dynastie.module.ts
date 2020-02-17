import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDynastiePageRoutingModule } from './movie-dynastie-routing.module';

import { MovieDynastiePage } from './movie-dynastie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDynastiePageRoutingModule
  ],
  declarations: [MovieDynastiePage]
})
export class MovieDynastiePageModule {}
