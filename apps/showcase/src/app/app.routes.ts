import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: ':type/:topic',
    loadComponent: () =>
      import('@angular-bits/demo-loader').then((m) => m.DemoLoaderComponent),
    data: {
      // The type and topic will be extracted from the URL parameters
    }
  }
];
