import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import {
  BemTestSelectors,
  ComponentLifecycleLogger,
  TestPerformanceMetrics,
  TestErrorLogger,
  createEducationalFixture,
  TestSetupConfig
} from './testing';

@Component({
  selector: 'test-component',
  template: `
    <div class="test-block">
      <div class="test-block__element">Element</div>
      <div class="test-block__element--modified">Modified Element</div>
    </div>
  `
})
class TestComponent {
  ngOnInit(): void {
    // Initialize test component
    this.setupTestComponent();
  }

  ngOnDestroy(): void {
    // Clean up test resources
    this.cleanupTestResources();
  }
}

describe('Educational Testing Utilities', () => {
  let fixture: ComponentFixture<TestComponent>;
  let config: TestSetupConfig<TestComponent>;

  beforeEach(async () => {
    config = {
      component: TestComponent,
      imports: [],
      declarations: [],
      providers: []
    };
    fixture = await createEducationalFixture(config);
  });

  describe('BemTestSelectors', () => {
    it('should find element by BEM block', () => {
      const element = BemTestSelectors.byBlock(fixture, 'test-block');
      expect(element).toBeTruthy();
      expect(element.className).toBe('test-block');
    });

    it('should find element by BEM element', () => {
      const element = BemTestSelectors.byElement(fixture, 'test-block', 'element');
      expect(element).toBeTruthy();
      expect(element.textContent).toBe('Element');
    });

    it('should find element by BEM modifier', () => {
      const element = BemTestSelectors.byModifier(
        fixture,
        'test-block',
        'element',
        'modified'
      );
      expect(element).toBeTruthy();
      expect(element.textContent).toBe('Modified Element');
    });
  });

  describe('ComponentLifecycleLogger', () => {
    it('should log component lifecycle hooks', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      ComponentLifecycleLogger.logLifecycle(fixture);
      
      fixture.detectChanges(); // Trigger lifecycle hooks
      fixture.destroy();

      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('TestPerformanceMetrics', () => {
    it('should measure test execution time', () => {
      const consoleTimeSpy = jest.spyOn(console, 'time');
      const consoleTimeEndSpy = jest.spyOn(console, 'timeEnd');
      const consoleInfoSpy = jest.spyOn(console, 'info');

      TestPerformanceMetrics.start();
      TestPerformanceMetrics.end();

      expect(consoleTimeSpy).toHaveBeenCalledWith('🎓 Test Execution');
      expect(consoleTimeEndSpy).toHaveBeenCalledWith('🎓 Test Execution');
      expect(consoleInfoSpy).toHaveBeenCalledWith(
        '🎓 Performance Metrics:',
        expect.any(Object)
      );

      consoleTimeSpy.mockRestore();
      consoleTimeEndSpy.mockRestore();
      consoleInfoSpy.mockRestore();
    });
  });

  describe('TestErrorLogger', () => {
    it('should log errors with educational context', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error');
      const error = new Error('Test error');
      const context = { test: 'context' };

      TestErrorLogger.logError(error, context);

      expect(consoleErrorSpy).toHaveBeenCalledWith('Error:', error.message);
      expect(consoleErrorSpy).toHaveBeenCalledWith('Stack:', error.stack);
      expect(consoleErrorSpy).toHaveBeenCalledWith('Context:', context);

      consoleErrorSpy.mockRestore();
    });
  });

  describe('createEducationalFixture', () => {
    it('should create component fixture with educational logging', async () => {
      const consoleInfoSpy = jest.spyOn(console, 'info');
      
      await createEducationalFixture(config);

      expect(consoleInfoSpy).toHaveBeenCalledWith(
        '🎓 Educational Test Setup:',
        expect.any(Object)
      );

      consoleInfoSpy.mockRestore();
    });
  });
});
