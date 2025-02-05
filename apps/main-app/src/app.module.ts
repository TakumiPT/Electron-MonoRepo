import { Module } from '@nestjs/common'
import { ElectronModule } from '@doubleshot/nest-electron'
import { app, BrowserWindow } from 'electron'
import { AppController } from './controllers/app/app.controller'
import { AppService } from './services/app/app.service'
import path from 'node:path';


@Module({
  imports: [ElectronModule.registerAsync({
    // name: 'main', // default window names "main", you can skip the name if only provide one window
    useFactory: async () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
        },
      });

      if (app.isPackaged) {
        win.loadFile(path.join(__dirname, 'renderer-app', 'browser', 'index.html'));
      }else {
        win.loadURL('http://localhost:4200');
      }

      return win;
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }