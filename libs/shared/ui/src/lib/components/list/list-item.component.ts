import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbListModule } from '@nebular/theme';

/**
 * A list item component that wraps Nebular's nb-list-item component.
 * Provides a consistent interface for displaying list items with support for disabled and active states.
 * 
 * Features:
 * - Consistent styling across the application
 * - Support for disabled and active states
 * - BEM methodology
 * - OnPush change detection
 * - Nebular integration
 *
 * @example
 * ```html
 * <lib-ui-list>
 *   <lib-ui-list-item>Basic item</lib-ui-list-item>
 *   <lib-ui-list-item [disabled]="true">Disabled item</lib-ui-list-item>
 *   <lib-ui-list-item [active]="true">Active item with icon
 *     <lib-ui-icon icon="star"></lib-ui-icon>
 *   </lib-ui-list-item>
 * </lib-ui-list>
 * ```
 */
@Component({
  selector: 'lib-ui-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NbListModule],
})
export class ListItemComponent {
  /** Whether the list item is disabled. When true, the item will be grayed out and non-interactive. */
  @Input() disabled = false;

  /** Whether the list item is active. When true, the item will be highlighted. */
  @Input() active = false;

  /** Reference to the content template used by the parent list component */
  @ViewChild('contentTpl', { static: true }) contentTpl!: TemplateRef<unknown>;
} 