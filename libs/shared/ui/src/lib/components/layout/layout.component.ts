import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NbLayoutModule, 
  NbSidebarModule,
} from '@nebular/theme';

@Component({
  selector: 'lib-ui-layout',
  standalone: true,
  imports: [
    CommonModule, 
    NbLayoutModule,
    NbSidebarModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @Input() withScroll = true;
  @Input() withPadding = true;
} 