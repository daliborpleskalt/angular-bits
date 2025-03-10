import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/**
 * Educational testing utilities for Angular components and services
 * Follows BEM methodology for test selectors
 */

/**
 * Configuration for component testing setup
 */
export interface TestConfig<T> {
  component: Type<T>;
  providers?: unknown[];
  imports?: unknown[];
  declarations?: Type<unknown>[];
}

export interface TestContext<T> {
  fixture: ComponentFixture<T>;
  component: T;
  [key: string]: unknown;
}

/**
 * Creates a test fixture with educational logging
 * @param config Test setup configuration
 * @returns ComponentFixture<T>
 */
export async function createEducationalFixture<T>(
  config: TestConfig<T>
): Promise<ComponentFixture<T>> {
  await TestBed.configureTestingModule({
    imports: config.imports || [],
    declarations: config.declarations || [],
    providers: config.providers || [],
  }).compileComponents();

  const fixture = TestBed.createComponent(config.component);
  console.info('🎓 Angular-bits Test Setup:', {
    component: config.component.name,
    imports: config.imports?.map(imp => (imp as { name?: string }).name),
    providers: config.providers?.map(p => (p as { name?: string }).name || 'Anonymous Provider'),
    declarations: config.declarations?.map(d => (d as { name?: string }).name),
  });

  return fixture;
}

/**
 * BEM-style query selectors for testing
 */
export class BemTestSelectors {
  /**
   * Queries element by BEM block
   * @param fixture Component fixture
   * @param block BEM block name
   * @returns Element if found
   */
  static byBlock<T>(fixture: ComponentFixture<T>, block: string): HTMLElement {
    return fixture.debugElement.query(By.css(`.${block}`))?.nativeElement;
  }

  /**
   * Queries element by BEM element
   * @param fixture Component fixture
   * @param block BEM block name
   * @param element BEM element name
   * @returns Element if found
   */
  static byElement<T>(
    fixture: ComponentFixture<T>,
    block: string,
    element: string
  ): HTMLElement {
    return fixture.debugElement.query(By.css(`.${block}__${element}`))?.nativeElement;
  }

  /**
   * Queries element by BEM modifier
   * @param fixture Component fixture
   * @param block BEM block name
   * @param element BEM element name
   * @param modifier BEM modifier name
   * @returns Element if found
   */
  static byModifier<T>(
    fixture: ComponentFixture<T>,
    block: string,
    element: string,
    modifier: string
  ): HTMLElement {
    return fixture.debugElement.query(
      By.css(`.${block}__${element}--${modifier}`)
    )?.nativeElement;
  }
}

/**
 * Educational test logger for component lifecycle
 */
export class ComponentLifecycleLogger {
  static logLifecycle<T>(fixture: ComponentFixture<T>): void {
    const component = fixture.componentInstance as { [key: string]: any };
    const componentName = component.constructor.name;

    console.group(`🎓 ${componentName} Lifecycle`);
    
    // Patch lifecycle hooks
    const hooks = [
      'ngOnInit',
      'ngOnChanges',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy'
    ];

    hooks.forEach(hook => {
      if (component[hook]) {
        const original = component[hook];
        component[hook] = function(...args: any[]) {
          console.log(`${hook} called`, args);
          return original.apply(this, args);
        };
      }
    });

    console.groupEnd();
  }
}

/**
 * Educational performance metrics for tests
 */
export class TestPerformanceMetrics {
  private static startTime: number;

  /**
   * Starts performance measurement
   */
  static start(): void {
    this.startTime = performance.now();
    console.time('🎓 Test Execution');
  }

  /**
   * Ends performance measurement and logs metrics
   */
  static end(): void {
    const duration = performance.now() - this.startTime;
    console.timeEnd('🎓 Test Execution');
    console.info('🎓 Performance Metrics:', {
      duration: `${duration.toFixed(2)}ms`,
      memory: process.memoryUsage(),
    });
  }
}

/**
 * Educational test error handler
 */
export class TestErrorLogger {
  /**
   * Logs test errors with educational context
   * @param error Error object
   * @param context Additional context
   */
  static logError(error: Error, context?: any): void {
    console.group('🎓 Test Error');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    if (context) {
      console.error('Context:', context);
    }
    console.groupEnd();
  }
}

export function createTestingModule<T>(config: TestConfig<T>): void {
  TestBed.configureTestingModule({
    imports: config.imports || [],
    declarations: [config.component, ...(config.declarations || [])],
    providers: config.providers || []
  });
}

export function setupTestBed<T>(config: TestConfig<T>): TestContext<T> {
  createTestingModule(config);
  const fixture = TestBed.createComponent(config.component);
  const component = fixture.componentInstance;
  return { fixture, component };
}

export function createComponent<T>(component: Type<T>): ComponentFixture<T> {
  return TestBed.createComponent(component);
}
