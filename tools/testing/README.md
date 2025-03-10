# @angular-bits/testing

Educational testing utilities for Angular components and services, designed to enhance the learning experience while following BEM methodology.

## Features

### BEM Test Selectors
Query elements using BEM methodology selectors:
```typescript
// By block
const element = BemTestSelectors.byBlock(fixture, 'block-name');

// By element
const element = BemTestSelectors.byElement(fixture, 'block-name', 'element-name');

// By modifier
const element = BemTestSelectors.byModifier(fixture, 'block-name', 'element-name', 'modifier-name');
```

### Component Lifecycle Logger
Monitor and learn about component lifecycle hooks:
```typescript
ComponentLifecycleLogger.logLifecycle(fixture);
// Logs all lifecycle hook calls with educational context
```

### Test Performance Metrics
Measure and analyze test execution performance:
```typescript
TestPerformanceMetrics.start();
// Run your tests
TestPerformanceMetrics.end();
// Logs execution time and memory usage
```

### Educational Test Error Logger
Enhanced error logging with educational context:
```typescript
try {
  // Test code
} catch (error) {
  TestErrorLogger.logError(error, { additionalContext: 'value' });
}
```

### Educational Fixture Creation
Create component fixtures with educational logging:
```typescript
const config: TestSetupConfig<YourComponent> = {
  component: YourComponent,
  imports: [CommonModule],
  declarations: [ChildComponent],
  providers: [YourService]
};

const fixture = await createEducationalFixture(config);
```

## Installation

```bash
npm install @angular-bits/testing --save-dev
```

## Usage Example

```typescript
import { ComponentFixture } from '@angular/core/testing';
import {
  BemTestSelectors,
  ComponentLifecycleLogger,
  TestPerformanceMetrics,
  createEducationalFixture
} from '@angular-bits/testing';

describe('YourComponent', () => {
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    fixture = await createEducationalFixture({
      component: YourComponent,
      imports: [CommonModule]
    });

    ComponentLifecycleLogger.logLifecycle(fixture);
    TestPerformanceMetrics.start();
  });

  afterEach(() => {
    TestPerformanceMetrics.end();
  });

  it('should render elements correctly', () => {
    const header = BemTestSelectors.byElement(fixture, 'your-block', 'header');
    expect(header.textContent).toBe('Expected Text');
  });
});
```

## Best Practices

1. Use BEM methodology consistently in your templates:
```html
<div class="block">
  <div class="block__element">Content</div>
  <div class="block__element--modified">Modified Content</div>
</div>
```

2. Enable lifecycle logging early in your tests
3. Measure performance for complex test suites
4. Use educational error logging for better debugging experience

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
