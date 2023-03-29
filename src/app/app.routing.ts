import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./blog/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./blog/article/article.component').then(
        (m) => m.ArticleComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
