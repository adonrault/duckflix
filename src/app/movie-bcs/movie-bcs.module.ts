import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieBcsPageRoutingModule } from './movie-bcs-routing.module';

import { MovieBcsPage } from './movie-bcs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieBcsPageRoutingModule
  ],
  declarations: [MovieBcsPage]
})
export class MovieBcsPageModule {}
