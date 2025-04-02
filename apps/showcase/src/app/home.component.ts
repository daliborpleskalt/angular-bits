import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  ButtonComponent,
  CardComponent,
  IconComponent,
  ListComponent,
  ListItemComponent,
  TabsComponent
} from '@angular-bits/ui';

/**
 * @Example Home Component
 * Main landing page showcasing key features and navigation.
 * 
 * Features:
 * - Responsive grid layout
 * - Card-based feature showcase
 * - Tabbed navigation
 * - BEM methodology
 * - Design token integration
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    ButtonComponent,
    CardComponent,
    IconComponent,
    ListComponent,
    ListItemComponent,
    TabsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {} 