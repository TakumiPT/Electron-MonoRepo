import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });

    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return version', async () => {
    const expectedVersion = '1.0.0';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.spyOn<any, any>(service, 'invoke').mockResolvedValue(expectedVersion);

    const version = await service.version();
    expect(version).toBe(expectedVersion);
    expect(service['invoke']).toHaveBeenCalledWith('version', null);
  });

  it('should return name', async () => {
    const expectedName = 'ElectronApp';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.spyOn<any, any>(service, 'invoke').mockResolvedValue(expectedName);

    const name = await service.name();
    expect(name).toBe(expectedName);
    expect(service['invoke']).toHaveBeenCalledWith('name', null);
  });
});
