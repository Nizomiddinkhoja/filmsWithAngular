import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: 'film/:id', loadChildren: () => import('./film/film.module').then(m => m.FilmModule)},
  {path: 'genres/:id', loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule)},
  {path: '**', loadChildren: () => import('./card/card.module').then(m => m.CardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
