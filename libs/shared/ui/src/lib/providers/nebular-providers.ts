import { importProvidersFrom } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbSidebarModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

export const provideNebular = () => [
  importProvidersFrom(
    NbThemeModule.forRoot({ name: 'angular-bits' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbEvaIconsModule
  )
];
