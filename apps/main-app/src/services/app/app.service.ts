import { Window } from '@doubleshot/nest-electron'
import { Injectable } from '@nestjs/common'
import type { BrowserWindow } from 'electron'

@Injectable()
export class AppService {
  constructor(
    // default window names "main", you can skip the name
    @Window() private readonly win: BrowserWindow,
  ) { }

  public getWindowTitle() {
    return this.win.title
  }
}