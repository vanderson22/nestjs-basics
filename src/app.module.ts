import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingsController } from './controllers/greetings.controller';

@Module({
  imports: [],
  controllers: [AppController, GreetingsController ],
  providers: [AppService],
})
export class AppModule {}
