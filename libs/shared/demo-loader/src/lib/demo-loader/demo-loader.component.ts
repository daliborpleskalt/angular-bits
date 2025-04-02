import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-demo-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-loader.component.html',
  styleUrls: ['./demo-loader.component.scss']
})
export class DemoLoaderComponent implements OnInit {
  loading = true;
  error: string | null = null;
  component: Type<unknown> | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    const topic = this.route.snapshot.paramMap.get('topic');
    
    if (!topic || !type) {
      this.loading = false;
      this.error = 'No topic or type specified';
      return;
    }

    this.loadTopic(type, topic);
  }

  private async loadTopic(type: string, topic: string) {
    try {
      // Using @vite-ignore to suppress dynamic import warning
      /* @vite-ignore */
      const module = await import('@angular-bits/topics');
      const demoComponentName = `${this.pascalCase(topic)}DemoComponent`;
      
      const component = (module as Record<string, Type<unknown>>)[demoComponentName];
      if (!component) {
        throw new Error(`Component ${demoComponentName} not found in @angular-bits/topics`);
      }

      this.component = component;
      this.loading = false;
    } catch (err) {
      console.error('Error loading topic:', err);
      this.loading = false;
      this.error = `Failed to load topic: ${err instanceof Error ? err.message : 'Unknown error'}`;
    }
  }

  private pascalCase(str: string): string {
    return str
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }
}
