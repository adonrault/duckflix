import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieReasonswhyPageRoutingModule } from './movie-reasonswhy-routing.module';

import { MovieReasonswhyPage } from './movie-reasonswhy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieReasonswhyPageRoutingModule
  ],
  declarations: [MovieReasonswhyPage]
})
export class MovieReasonswhyPageModule {}
