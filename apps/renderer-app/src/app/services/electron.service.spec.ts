import { ElectronService } from './electron.service';

class TestElectronService extends ElectronService {
    override get channel(): string {
        return 'app';
    }
}

describe('ElectronService', () => {
  let service: TestElectronService;

  beforeEach(() => {
    service = new TestElectronService();
    window.electron = {
      on: jest.fn(),
      invoke: jest.fn().mockResolvedValue('response')
    } as { on: jest.Mock; invoke: jest.Mock };
  });

  it('should call electron.on with the correct channel and listener', () => {
    const listener = jest.fn();
    service['on']('test-event', listener);
    expect(window.electron.on).toHaveBeenCalledWith('test-event', listener);
  });

  it('should call electron.invoke with the correct handler name and request', async () => {
    const response = await service['invoke']('test-handler', 'request');
    expect(window.electron.invoke).toHaveBeenCalledWith('app/test-handler', 'request');
    expect(response).toBe('response');
  });
});
