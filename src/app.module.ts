import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    // View Module всегда последний
    ViewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
