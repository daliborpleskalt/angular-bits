import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from '../content-projection.component';

@Component({
  selector: 'lib-content-projection-demo',
  standalone: true,
  imports: [CommonModule, ContentProjectionComponent],
  template: `
    <div class="content-projection-demo">
      <h2 class="content-projection-demo__title">Demo: ContentProjection</h2>
      <div class="content-projection-demo__content">
        <lib-content-projection></lib-content-projection>
      </div>
    </div>
  `,
  styles: [
    `
      .content-projection-demo {
        display: block;
        padding: 1rem;

        &__title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        &__content {
          border: 1px solid #eee;
          padding: 1rem;
          border-radius: 4px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentProjectionDemoComponent {
  // Demo component implementation
}
