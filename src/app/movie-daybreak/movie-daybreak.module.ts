import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDaybreakPageRoutingModule } from './movie-daybreak-routing.module';

import { MovieDaybreakPage } from './movie-daybreak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDaybreakPageRoutingModule
  ],
  declarations: [MovieDaybreakPage]
})
export class MovieDaybreakPageModule {}
