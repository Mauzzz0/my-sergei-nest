import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/example')
  public example() {
    return 'Hello World!';
  }
}
