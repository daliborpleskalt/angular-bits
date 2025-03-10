import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  NbCardModule, 
  NbButtonModule, 
  NbIconModule, 
  NbListModule,
  NbAccordionModule,
  NbTabsetModule
} from '@nebular/theme';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NbCardModule, 
    NbButtonModule, 
    NbIconModule, 
    NbListModule,
    NbAccordionModule,
    NbTabsetModule
  ],
  template: `
    <div class="home">
      <h1 class="home__title">Angular Bits</h1>
      <p class="home__subtitle">Educational topics and patterns with Nebular UI</p>
      
      <div class="home__features">
        <nb-card class="home__feature-card">
          <nb-card-header>
            <nb-icon icon="color-palette-outline"></nb-icon> Design Tokens
          </nb-card-header>
          <nb-card-body>
            <p>Maintain SCSS variables in version-controlled JSON files</p>
            <nb-list>
              <nb-list-item>Centralized design system</nb-list-item>
              <nb-list-item>Automatic SCSS generation</nb-list-item>
              <nb-list-item>Nebular theme integration</nb-list-item>
            </nb-list>
          </nb-card-body>
          <nb-card-footer>
            <button nbButton status="primary" routerLink="/ux/design-tokens">
              Learn More
            </button>
          </nb-card-footer>
        </nb-card>
        
        <nb-card class="home__feature-card">
          <nb-card-header>
            <nb-icon icon="book-outline"></nb-icon> Component Documentation
          </nb-card-header>
          <nb-card-body>
            <p>Storybook integration for 100% component coverage</p>
            <nb-list>
              <nb-list-item>Interactive examples</nb-list-item>
              <nb-list-item>Accessibility checks</nb-list-item>
              <nb-list-item>Responsive testing</nb-list-item>
            </nb-list>
          </nb-card-body>
          <nb-card-footer>
            <button nbButton status="info" routerLink="/component/button">
              View Components
            </button>
          </nb-card-footer>
        </nb-card>
        
        <nb-card class="home__feature-card">
          <nb-card-header>
            <nb-icon icon="flash-outline"></nb-icon> Performance Budgeting
          </nb-card-header>
          <nb-card-body>
            <p>Enforce 150KB CSS/JS limits per route</p>
            <nb-list>
              <nb-list-item>Automated bundle analysis</nb-list-item>
              <nb-list-item>Size warnings and errors</nb-list-item>
              <nb-list-item>CI/CD integration</nb-list-item>
            </nb-list>
          </nb-card-body>
          <nb-card-footer>
            <button nbButton status="success" routerLink="/ux/performance">
              Check Performance
            </button>
          </nb-card-footer>
        </nb-card>
        
        <nb-card class="home__feature-card">
          <nb-card-header>
            <nb-icon icon="checkmark-circle-outline"></nb-icon> Accessibility
          </nb-card-header>
          <nb-card-body>
            <p>Monthly WCAG 2.1 AA compliance checks</p>
            <nb-list>
              <nb-list-item>Automated audits</nb-list-item>
              <nb-list-item>Detailed reports</nb-list-item>
              <nb-list-item>Remediation tracking</nb-list-item>
            </nb-list>
          </nb-card-body>
          <nb-card-footer>
            <button nbButton status="warning" routerLink="/ux/accessibility">
              View Accessibility
            </button>
          </nb-card-footer>
        </nb-card>
      </div>
      
      <nb-tabset class="home__topics">
        <nb-tab tabTitle="Components">
          <nb-list>
            <nb-list-item>
              <a routerLink="/component/content-projection">Content Projection</a>
            </nb-list-item>
            <nb-list-item>
              <a routerLink="/component/button">Button</a>
            </nb-list-item>
          </nb-list>
        </nb-tab>
        <nb-tab tabTitle="UX Framework">
          <nb-list>
            <nb-list-item>
              <a routerLink="/ux/design-tokens">Design Tokens</a>
            </nb-list-item>
            <nb-list-item>
              <a routerLink="/ux/accessibility">Accessibility</a>
            </nb-list-item>
            <nb-list-item>
              <a routerLink="/ux/performance">Performance</a>
            </nb-list-item>
          </nb-list>
        </nb-tab>
      </nb-tabset>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;

      &__title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      &__subtitle {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
      }

      &__features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
      
      &__feature-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        
        nb-card-header {
          display: flex;
          align-items: center;
          
          nb-icon {
            margin-right: 0.5rem;
          }
        }
        
        nb-card-body {
          flex: 1;
        }
      }
      
      &__topics {
        margin-top: 2rem;
        
        a {
          text-decoration: none;
          color: inherit;
          display: block;
          padding: 0.5rem;
          transition: background-color 0.2s;
          
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  `]
})
export class HomeComponent {} 