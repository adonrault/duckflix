import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieBlacklightningPageRoutingModule } from './movie-blacklightning-routing.module';

import { MovieBlacklightningPage } from './movie-blacklightning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieBlacklightningPageRoutingModule
  ],
  declarations: [MovieBlacklightningPage]
})
export class MovieBlacklightningPageModule {}
