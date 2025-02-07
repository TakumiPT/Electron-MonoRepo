import { ipcMain } from 'electron';

export abstract class BaseController {

    abstract get channel(): string;

    abstract initializeIpcHandlers(): void;

    protected registerIpcHandler(endpoint: string, handler: () => unknown): void {
        ipcMain.handle(`${this.channel}/${endpoint}`, handler);
    }
    
}
