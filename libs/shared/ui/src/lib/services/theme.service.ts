import { Injectable } from '@angular/core';
import { NbThemeService, NbJSThemeOptions } from '@nebular/theme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private nbTheme: NbThemeService) {}

  setTheme(name: string): void {
    this.nbTheme.changeTheme(name);
  }

  get currentTheme(): string {
    return this.nbTheme.currentTheme;
  }

  onThemeChange(): Observable<NbJSThemeOptions> {
    return this.nbTheme.onThemeChange();
  }
}
