import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDraculaPageRoutingModule } from './movie-dracula-routing.module';

import { MovieDraculaPage } from './movie-dracula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDraculaPageRoutingModule
  ],
  declarations: [MovieDraculaPage]
})
export class MovieDraculaPageModule {}
