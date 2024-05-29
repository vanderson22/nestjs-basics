import { Controller, Get } from '@nestjs/common';

@Controller("/greetings")
export class GreetingsController {
  constructor() {}

  @Get()
  public getHello(): string {
    return "Greetings - Hello World!";
  }
}
