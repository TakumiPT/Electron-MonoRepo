import { Injectable } from '@angular/core';

declare global {
  interface Window {
    electron: {
      invoke: <T>(channel: string, request: unknown) => Promise<T>;
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export abstract class ElectronService {

  abstract getChannel(): string;



  protected invoke<T>(channel: string, request: unknown): Promise<T> {
    return window.electron.invoke(channel, request);
  }
}