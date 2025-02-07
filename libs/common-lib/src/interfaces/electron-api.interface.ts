import { IpcRendererEvent } from 'electron';

export interface ElectronAPI {
    invoke: <T>(channel: string, request: unknown) => Promise<T>;
    on: (channel: string, listener: (event: IpcRendererEvent, ...args: unknown[]) => void) => void;
}
