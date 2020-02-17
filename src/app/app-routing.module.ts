import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'introvideo',
    loadChildren: () => import('./introvideo/introvideo.module').then( m => m.IntrovideoPageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  },
  {
    path: 'movie-you',
    loadChildren: () => import('./movie-you/movie-you.module').then( m => m.MovieYouPageModule)
  },
  {
    path: 'movie-alteredcarbon',
    loadChildren: () => import('./movie-alteredcarbon/movie-alteredcarbon.module').then( m => m.MovieAlteredcarbonPageModule)
  },
  {
    path: 'movie-reasonswhy',
    loadChildren: () => import('./movie-reasonswhy/movie-reasonswhy.module').then( m => m.MovieReasonswhyPageModule)
  },
  {
    path: 'movie-thewitcher',
    loadChildren: () => import('./movie-thewitcher/movie-thewitcher.module').then( m => m.MovieThewitcherPageModule)
  },
  {
    path: 'movie-thepunisher',
    loadChildren: () => import('./movie-thepunisher/movie-thepunisher.module').then( m => m.MovieThepunisherPageModule)
  },
  {
    path: 'movie-strangerthings',
    loadChildren: () => import('./movie-strangerthings/movie-strangerthings.module').then( m => m.MovieStrangerthingsPageModule)
  },
  {
    path: 'narcos',
    loadChildren: () => import('./narcos/narcos.module').then( m => m.NarcosPageModule)
  },
  {
    path: 'messiah',
    loadChildren: () => import('./messiah/messiah.module').then( m => m.MessiahPageModule)
  },
  {
    path: 'lucifer',
    loadChildren: () => import('./lucifer/lucifer.module').then( m => m.LuciferPageModule)
  },
  {
    path: 'lockandkey',
    loadChildren: () => import('./lockandkey/lockandkey.module').then( m => m.LockandkeyPageModule)
  },
  {
    path: 'movie-insatiable',
    loadChildren: () => import('./movie-insatiable/movie-insatiable.module').then( m => m.MovieInsatiablePageModule)
  },
  {
    path: 'movie-elite',
    loadChildren: () => import('./movie-elite/movie-elite.module').then( m => m.MovieElitePageModule)
  },
  {
    path: 'movie-dynastie',
    loadChildren: () => import('./movie-dynastie/movie-dynastie.module').then( m => m.MovieDynastiePageModule)
  },
  {
    path: 'movie-dracula',
    loadChildren: () => import('./movie-dracula/movie-dracula.module').then( m => m.MovieDraculaPageModule)
  },
  {
    path: 'movie-daybreak',
    loadChildren: () => import('./movie-daybreak/movie-daybreak.module').then( m => m.MovieDaybreakPageModule)
  },
  {
    path: 'movie-dark',
    loadChildren: () => import('./movie-dark/movie-dark.module').then( m => m.MovieDarkPageModule)
  },
  {
    path: 'movie-breakingbad',
    loadChildren: () => import('./movie-breakingbad/movie-breakingbad.module').then( m => m.MovieBreakingbadPageModule)
  },
  {
    path: 'movie-blacklightning',
    loadChildren: () => import('./movie-blacklightning/movie-blacklightning.module').then( m => m.MovieBlacklightningPageModule)
  },
  {
    path: 'movie-bcs',
    loadChildren: () => import('./movie-bcs/movie-bcs.module').then( m => m.MovieBcsPageModule)
  },
  {
    path: 'movie-arrow',
    loadChildren: () => import('./movie-arrow/movie-arrow.module').then( m => m.MovieArrowPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
