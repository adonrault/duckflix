import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieInsatiablePageRoutingModule } from './movie-insatiable-routing.module';

import { MovieInsatiablePage } from './movie-insatiable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieInsatiablePageRoutingModule
  ],
  declarations: [MovieInsatiablePage]
})
export class MovieInsatiablePageModule {}
