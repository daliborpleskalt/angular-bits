import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent, ThemeSwitcherComponent } from '@angular-bits/ui';

@Component({
  selector: 'app-angular-bits-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LayoutComponent, ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';
}
