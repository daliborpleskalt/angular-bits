import { Route } from '@angular/router';
import { DemoLoaderComponent } from './demo-loader/demo-loader.component';

export const DEMO_ROUTES: Route[] = [
  {
    path: '',
    component: DemoLoaderComponent,
  }
]; 