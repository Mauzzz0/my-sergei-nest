import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
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

  @ApiOperation({ summary: 'Взять полный список задач', description: 'Этот метод можно использовать для списка задач' })
  @Get('/')
  public readTasks(@Query() dto: FindAllTasksQueryDto) {
    return this.appService.createTask();
  }
}
