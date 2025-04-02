import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '@nebular/theme';

@Component({
  selector: 'lib-ui-icon',
  standalone: true,
  imports: [CommonModule, NbIconModule],
  template: `
    <nb-icon [icon]="icon"></nb-icon>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class IconComponent {
  @Input() icon!: string;
} 