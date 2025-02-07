import { app } from 'electron';

/**
 *
 *
 * @export
 * @class AppService
 */
export class AppService {
    
    getVersion(): string {
        return app.getVersion();
    }

    getName(): string {
        return app.getName();
    }

    getAppPath(): string {
        return app.getAppPath();
    }

    quit(): void {
        return app.quit();
    }

    relaunch(): void {
        return app.relaunch();
    }

    isReady(): boolean {
        return app.isReady();
    }

    getPreferredSystemLanguages(): string[] {
        return app.getPreferredSystemLanguages();
    }

    getLocale(): string {
        return app.getLocale();
    }

    getLocaleCountryCode(): string {
        return app.getLocaleCountryCode();
    }
    
}