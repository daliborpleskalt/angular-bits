import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'component/button',
    loadComponent: () =>
      import('./component/button/button.component').then((m) => m.ButtonShowcaseComponent),
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
