import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoLoaderComponent } from './demo-loader.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('DemoLoaderComponent', () => {
  let component: DemoLoaderComponent;
  let fixture: ComponentFixture<DemoLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLoaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ type: 'component', topic: 'test' }),
            snapshot: {
              paramMap: convertToParamMap({ type: 'component', topic: 'test' })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
