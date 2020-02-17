import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieStrangerthingsPageRoutingModule } from './movie-strangerthings-routing.module';

import { MovieStrangerthingsPage } from './movie-strangerthings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieStrangerthingsPageRoutingModule
  ],
  declarations: [MovieStrangerthingsPage]
})
export class MovieStrangerthingsPageModule {}
