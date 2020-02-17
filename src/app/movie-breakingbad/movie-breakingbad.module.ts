import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieBreakingbadPageRoutingModule } from './movie-breakingbad-routing.module';

import { MovieBreakingbadPage } from './movie-breakingbad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieBreakingbadPageRoutingModule
  ],
  declarations: [MovieBreakingbadPage]
})
export class MovieBreakingbadPageModule {}
