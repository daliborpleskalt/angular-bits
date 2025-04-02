import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service for managing demo mode state and functionality
 */
@Injectable({
  providedIn: 'root'
})
export class DemoModeService {
  private readonly demoModeState = new BehaviorSubject<boolean>(false);

  /**
   * Observable of the current demo mode state
   */
  readonly demoMode$: Observable<boolean> = this.demoModeState.asObservable();

  /**
   * Get current demo mode state
   */
  get isDemoMode(): boolean {
    return this.demoModeState.value;
  }

  /**
   * Enable demo mode
   */
  enable(): void {
    this.demoModeState.next(true);
  }

  /**
   * Disable demo mode
   */
  disable(): void {
    this.demoModeState.next(false);
  }

  /**
   * Toggle demo mode state
   */
  toggle(): void {
    this.demoModeState.next(!this.isDemoMode);
  }
} 