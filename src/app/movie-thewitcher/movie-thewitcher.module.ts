import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieThewitcherPageRoutingModule } from './movie-thewitcher-routing.module';

import { MovieThewitcherPage } from './movie-thewitcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieThewitcherPageRoutingModule
  ],
  declarations: [MovieThewitcherPage]
})
export class MovieThewitcherPageModule {}
