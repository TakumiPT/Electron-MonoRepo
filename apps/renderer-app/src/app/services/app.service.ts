import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends ElectronService{

  override get channel(): string {
    return 'app';
  }

  version(): Promise<string> {
    return this.invoke('version', null);
  }

  name(): Promise<string> { 
    return this.invoke('name', null);
  }
}
