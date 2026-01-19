import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'parking-control',
    loadComponent: () =>
      import('./pages/entrada-salida/entrada-salida.component')
  },
  {
    path: '**',
    redirectTo: 'parking-control'
  }
];
