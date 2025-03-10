import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, NbButtonModule],
  template: `
    <button
      nbButton
      [status]="status"
      [size]="size"
      [appearance]="appearance"
      [disabled]="disabled"
      [class]="'ui-button ui-button--' + status"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .ui-button {
      &--primary {
        font-weight: bold;
      }
      
      &--success {
        text-transform: uppercase;
      }
    }
  `]
})
export class ButtonComponent {
  /**
   * The button status (color)
   */
  @Input() status: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';
  
  /**
   * The button size
   */
  @Input() size: 'tiny' | 'small' | 'medium' | 'large' | 'giant' = 'medium';
  
  /**
   * The button appearance
   */
  @Input() appearance: 'filled' | 'outline' | 'ghost' = 'filled';
  
  /**
   * Whether the button is disabled
   */
  @Input() disabled = false;
} 