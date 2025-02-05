import { NestFactory } from '@nestjs/core'
import type { MicroserviceOptions } from '@nestjs/microservices'
import { app } from 'electron'
import { ElectronIpcTransport } from '@doubleshot/nest-electron'
import { AppModule } from './app.module'

async function bootstrap() {
  try {
    await app.whenReady()

    const nestApp = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        strategy: new ElectronIpcTransport(),
      },
    )

    await nestApp.listen();
  }
  catch {
    app.quit();
  }
}

bootstrap();