// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

interface ElectronAPI {
    invoke: (channel: string, payload: unknown) => Promise<unknown>;
    on: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: unknown[]) => void) => void;
}

contextBridge.exposeInMainWorld('electron', {
    invoke: (channel: string, payload: unknown) => ipcRenderer.invoke(channel, payload),
    on: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: unknown[]) => void) => ipcRenderer.on(channel, listener)
} as ElectronAPI);

