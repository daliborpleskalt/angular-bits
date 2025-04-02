import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NbSidebarModule, NbMenuModule, NbThemeModule } from '@nebular/theme';
import { LayoutComponent, ThemeSwitcherComponent } from '@angular-bits/ui';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        LayoutComponent,
        ThemeSwitcherComponent,
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
