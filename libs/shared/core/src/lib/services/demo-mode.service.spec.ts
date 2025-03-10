import { TestBed } from '@angular/core/testing';
import { DemoModeService } from './demo-mode.service';

describe('DemoModeService', () => {
  let service: DemoModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoModeService]
    });
    service = TestBed.inject(DemoModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with demo mode disabled', () => {
    expect(service.isDemoMode).toBeFalse();
  });

  it('should enable demo mode', () => {
    service.enable();
    expect(service.isDemoMode).toBeTrue();
  });

  it('should disable demo mode', () => {
    service.enable();
    service.disable();
    expect(service.isDemoMode).toBeFalse();
  });

  it('should toggle demo mode', () => {
    expect(service.isDemoMode).toBeFalse();
    service.toggle();
    expect(service.isDemoMode).toBeTrue();
    service.toggle();
    expect(service.isDemoMode).toBeFalse();
  });

  it('should emit state changes through demoMode$', (done) => {
    const states: boolean[] = [];
    service.demoMode$.subscribe(state => {
      states.push(state);
      if (states.length === 3) {
        expect(states).toEqual([false, true, false]);
        done();
      }
    });

    service.enable();
    service.disable();
  });
}); 