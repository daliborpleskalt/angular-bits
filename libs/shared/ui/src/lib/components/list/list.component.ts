import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbListModule } from '@nebular/theme';
import { ListItemComponent } from './list-item.component';

/**
 * A reusable list component that wraps Nebular's nb-list component.
 * Provides a consistent interface for displaying lists with optional dividers and hover effects.
 *
 * @example
 * ```html
 * <lib-ui-list [hasDivider]="true" [hasHover]="true">
 *   <lib-ui-list-item>Item 1</lib-ui-list-item>
 *   <lib-ui-list-item [disabled]="true">Item 2</lib-ui-list-item>
 *   <lib-ui-list-item [active]="true">Item 3</lib-ui-list-item>
 * </lib-ui-list>
 * ```
 */
@Component({
  selector: 'lib-ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NbListModule],
})
export class ListComponent implements AfterContentInit {
  /** Whether to show dividers between list items */
  @Input() hasDivider = false;

  /** Whether to show hover effects on list items */
  @Input() hasHover = false;

  /** Query all list item components from projected content */
  @ContentChildren(ListItemComponent) listItems!: QueryList<ListItemComponent>;

  ngAfterContentInit() {
    // Subscribe to changes in list items to handle dynamic updates
    this.listItems.changes.subscribe(() => {
      // Handle dynamic updates to list items if needed
    });
  }
} 