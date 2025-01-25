import { app } from 'electron';

jest.mock('electron', () => ({
  app: {
    isPackaged: false,
    on: jest.fn(),
    whenReady: jest.fn().mockResolvedValue(true),
  },
}));

describe('Electron App', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});