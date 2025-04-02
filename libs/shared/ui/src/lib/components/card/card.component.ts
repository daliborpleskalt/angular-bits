import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

/**
 * @Example Card Component
 * A wrapper around Nebular's card component that follows our design system.
 * 
 * Features:
 * - Content projection for header, body, and footer
 * - Consistent styling across the application
 * - OnPush change detection
 * - BEM methodology
 * 
 * Usage:
 * ```html
 * <lib-ui-card>
 *   <ng-container card-header>Card Header</ng-container>
 *   <ng-container card-body>Card Content</ng-container>
 *   <ng-container card-footer>Card Footer</ng-container>
 * </lib-ui-card>
 * ```
 */
@Component({
  selector: 'lib-ui-card',
  standalone: true,
  imports: [CommonModule, NbCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  /**
   * The card's status (color variant)
   * @default 'basic'
   */
  @Input() status: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger' = 'basic';

  /**
   * The card's size variant
   * @default 'medium'
   */
  @Input() size: 'tiny' | 'small' | 'medium' | 'large' | 'giant' = 'medium';

  /**
   * Whether the card has a shadow effect
   * @default true
   */
  @Input() hasAccent = true;

  /**
   * Query for header content
   * @internal
   */
  @ContentChild('cardHeader', { static: false }) header!: ElementRef;

  /**
   * Query for footer content
   * @internal
   */
  @ContentChild('cardFooter', { static: false }) footer!: ElementRef;
} 