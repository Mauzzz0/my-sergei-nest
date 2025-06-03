import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createTask() {
    return { id: 1, name: 'John Doe' };
  }
}
