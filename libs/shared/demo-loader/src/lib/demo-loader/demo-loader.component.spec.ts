import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoLoaderComponent } from './demo-loader.component';

describe('DemoLoaderComponent', () => {
  let component: DemoLoaderComponent;
  let fixture: ComponentFixture<DemoLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
