import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from '../content-projection.component';

@Component({
  selector: 'lib-content-projection-demo',
  standalone: true,
  imports: [CommonModule, ContentProjectionComponent],
  templateUrl: './content-projection-demo.component.html',
  styleUrls: ['./content-projection-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentProjectionDemoComponent {
  // Demo component implementation
}
