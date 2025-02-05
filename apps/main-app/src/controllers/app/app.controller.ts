import { Controller } from '@nestjs/common'
import { IpcHandle, IpcOn } from '@doubleshot/nest-electron'
import { Payload } from '@nestjs/microservices'

@Controller('app')
export class AppController {
  @IpcHandle('chat') // ipcRenderer.invoke('app/chat', msg); '/app/chat', 'app/chat/', '/app/chat/' are also available
  chat(@Payload() msg: string) {
    console.log(`Get message from frontend: ${msg}`)
    return 'This is a message to frontend'
  }

  @IpcOn('print-log') // ipcRenderer.send('app/print-log', msg),
  printLog(@Payload() log: string) {
    console.log(`Get log: ${log}`)
  }
}