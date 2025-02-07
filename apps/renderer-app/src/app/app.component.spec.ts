import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';

describe('AppComponent', () => {
  let appServiceMock: Partial<AppService>;

  beforeEach(async () => {
    appServiceMock = {
      version: jest.fn().mockResolvedValue('1.0.0'),
      name: jest.fn().mockResolvedValue('Test App')
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: AppService, useValue: appServiceMock }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'renderer-app in electron' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('renderer-app in electron');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Electron IPC Renderer Render');
  });
});
