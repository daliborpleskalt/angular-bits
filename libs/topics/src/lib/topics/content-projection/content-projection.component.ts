import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-content-projection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentProjectionComponent {
  // Component implementation
}
