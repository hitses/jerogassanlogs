import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routing').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'blog',
  },
];
