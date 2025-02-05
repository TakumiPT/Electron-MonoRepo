import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends ElectronService {

  getChannel(): string {
    return 'app';
  }

  chat(msg: string): Promise<string> {
    return this.invoke<string>(this.getChannel() + '/chat', msg);
  }

}
