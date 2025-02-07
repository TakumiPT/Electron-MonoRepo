import { Injectable } from '@angular/core';
import { ElectronAPI } from '@common-lib';

declare global {
  interface Window {
    electron: ElectronAPI
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