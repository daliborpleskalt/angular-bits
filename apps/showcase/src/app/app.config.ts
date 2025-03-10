import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NbSidebarModule, NbMenuModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    NbThemeModule.forRoot({ name: 'angular-bits' }).providers || [],
    NbSidebarModule.forRoot().providers || [],
    NbMenuModule.forRoot().providers || [],
  ],
};
