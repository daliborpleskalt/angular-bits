import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTabsetModule } from '@nebular/theme';

@Component({
  selector: 'lib-ui-tabs',
  standalone: true,
  imports: [CommonModule, NbTabsetModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {}

@Component({
  selector: 'lib-ui-tab',
  standalone: true,
  imports: [CommonModule, NbTabsetModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabComponent {
  /**
   * The title of the tab
   */
  @Input() title!: string;
} 