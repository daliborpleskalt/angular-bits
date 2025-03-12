import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  NbLayoutModule, 
  NbSidebarModule, 
  NbMenuModule, 
  NbIconModule, 
  NbCardModule,
  NbButtonModule,
  NbContextMenuModule,
  NbActionsModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbContextMenuModule,
    NbActionsModule
  ],
  selector: 'app-angular-bits-root',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <div class="showcase__header-content">
          <button nbButton ghost (click)="toggleSidebar()">
            <nb-icon icon="menu-outline"></nb-icon>
          </button>
          <h1 class="showcase__title">Angular Bits</h1>
          <nb-actions size="medium">
            <nb-action icon="github-outline" link="https://github.com/yourusername/angular-bits" target="_blank"></nb-action>
            <nb-action icon="sun-outline" (click)="toggleTheme()"></nb-action>
          </nb-actions>
        </div>
      </nb-layout-header>

      <nb-sidebar>
        <div class="showcase__sidebar-header">
          <h3>Navigation</h3>
        </div>
        <nb-menu [items]="menuItems"></nb-menu>
      </nb-sidebar>

      <nb-layout-column class="showcase__content">
        <nb-card>
          <nb-card-body>
            <router-outlet></router-outlet>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <div class="showcase__footer-content">
          <span>Angular Bits - Educational Examples</span>
          <span>Built with Nebular & Angular</span>
        </div>
      </nb-layout-footer>
    </nb-layout>
  `,
  styles: [`
    .showcase {
      &__header-content {
        display: flex;
        align-items: center;
        width: 100%;
        
        h1 {
          margin: 0 auto 0 1rem;
        }
      }
      
      &__title {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
      }
      
      &__sidebar-header {
        padding: 1.25rem;
        border-bottom: 1px solid #edf1f7;
        
        h3 {
          margin: 0;
          font-size: 1.25rem;
        }
      }

      &__content {
        padding: 1.25rem;
      }
      
      &__footer-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  `],
})
export class AppComponent {
  menuItems = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/',
      home: true,
    },
    {
      title: 'Components',
      icon: 'cube-outline',
      children: [
        {
          title: 'Content Projection',
          link: '/component/content-projection',
        },
        {
          title: 'Button',
          link: '/component/button',
        },
      ],
    },
    {
      title: 'UX Framework',
      icon: 'color-palette-outline',
      children: [
        {
          title: 'Design Tokens',
          link: '/ux/design-tokens',
        },
        {
          title: 'Accessibility',
          link: '/ux/accessibility',
        },
        {
          title: 'Performance',
          link: '/ux/performance',
        },
      ],
    },
  ];
  
  toggleSidebar() {
    const sidebar = document.querySelector('nb-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
  
  toggleTheme() {
    // This would be implemented with a theme service
    console.log('Theme toggle clicked');
  }
}
