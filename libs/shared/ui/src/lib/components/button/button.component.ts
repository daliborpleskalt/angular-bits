import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';

/**
 * @Example Button Component
 * A wrapper around Nebular's button component that follows our design system.
 * 
 * Features:
 * - Consistent styling across the application
 * - Type-safe props
 * - OnPush change detection
 * - BEM methodology
 * 
 * Usage:
 * ```html
 * <lib-ui-button 
 *   status="primary"
 *   size="medium"
 *   appearance="filled">
 *   Click Me
 * </lib-ui-button>
 * ```
 */
@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [CommonModule, NbButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /**
   * The button's status (color variant)
   * @default 'primary'
   */
  @Input() status: 'primary' | 'info' | 'success' | 'warning' | 'danger' = 'primary';
  
  /**
   * The button's size variant
   * @default 'medium'
   */
  @Input() size: 'tiny' | 'small' | 'medium' | 'large' | 'giant' = 'medium';
  
  /**
   * The button's appearance style
   * @default 'filled'
   */
  @Input() appearance: 'filled' | 'outline' | 'ghost' = 'filled';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  @Input() disabled = false;
} 