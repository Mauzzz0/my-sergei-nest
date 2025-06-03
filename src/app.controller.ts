import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto, FindAllTasksQueryDto } from './dto/create-task.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/example')
  public example() {
    return 'Hello World!';
  }

  @Post('/task')
  public createTask(@Body() dto: CreateTaskDto) {
    return this.appService.createTask();
  }

  @Get('/')
  public readTasks(@Query() dto: FindAllTasksQueryDto) {
    return this.appService.createTask();
  }
}
