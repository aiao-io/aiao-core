import { join } from 'path';

import { NestAngularUniversalModule } from '@aiao/nest-angular-universal';
import { Module } from '@nestjs/common';

import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';

@Module({
  imports: [
    NestAngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      distPath: join(process.cwd(), 'dist/apps/dev-nest-angular-universal/browser')
    })
  ],
  controllers: [AppController]
})
export class AppModule {}
