import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule } from '@nebular/theme';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-ui-theme-switcher',
  standalone: true,
  imports: [CommonModule, NbSelectModule, FormsModule],
  providers: [ThemeService],
  template: `
    <nb-select [(ngModel)]="currentTheme" (selectedChange)="changeTheme($event)">
      <nb-option *ngFor="let theme of themes" [value]="theme">
        {{ theme | titlecase }}
      </nb-option>
    </nb-select>
  `
})
export class ThemeSwitcherComponent implements OnInit {
  themes = ['corporate', 'angular-bits', 'dark'];
  currentTheme = 'angular-bits';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
  }

  changeTheme(themeName: string) {
    this.themeService.setTheme(themeName);
  }
}
