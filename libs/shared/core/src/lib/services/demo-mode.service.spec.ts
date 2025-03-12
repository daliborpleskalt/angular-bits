import { TestBed } from '@angular/core/testing';
import { DemoModeService } from './demo-mode.service';

describe('DemoModeService', () => {
  let service: DemoModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with demo mode disabled', () => {
    expect(service.isDemoMode).toBeFalsy();
  });

  it('should enable demo mode', () => {
    service.enable();
    expect(service.isDemoMode).toBeTruthy();
  });

  it('should disable demo mode', () => {
    service.enable();
    service.disable();
    expect(service.isDemoMode).toBeFalsy();
  });

  it('should toggle demo mode', () => {
    service.toggle();
    expect(service.isDemoMode).toBeTruthy();

    service.toggle();
    expect(service.isDemoMode).toBeFalsy();
  });

  it('should emit demo mode changes', (done) => {
    let emitCount = 0;
    service.demoMode$.subscribe((isEnabled) => {
      emitCount++;
      if (emitCount === 3) { // Initial false, then true, then false
        expect(isEnabled).toBeFalsy();
        done();
      }
    });

    service.enable();
    service.disable();
  });
}); 