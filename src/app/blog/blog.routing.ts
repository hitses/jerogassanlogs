import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./article/article.component').then((m) => m.ArticleComponent),
  },
];
