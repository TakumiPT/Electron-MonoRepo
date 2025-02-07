import { ElectronAPI } from '@common-lib';

declare global {
  interface Window {
    electron: ElectronAPI
  }
}


export abstract class ElectronService {

  abstract get channel(): string;

  protected on(channel: string, listener: (event: unknown, ...args: unknown[]) => void): void {
    window.electron.on(channel, listener);
  }

  protected invoke<T>(handlerName: string, request: unknown): Promise<T> {
    return window.electron.invoke(`${this.channel}/${handlerName}`, request);
  }
}