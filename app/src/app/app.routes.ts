import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'parking-control',
    loadComponent: () =>
      import('./pages/entry-exit/entry-exit.component')
  },
  {
    path: '**',
    redirectTo: 'parking-control'
  }
];
