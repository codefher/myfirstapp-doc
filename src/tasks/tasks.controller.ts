import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {
  // ? @Get('/tasks') es un decorator que indica que la función getAllTasks es una función de Get
  @Get('/tasks')
  getAllTasks() {
    return 'Obteniendo toda las tareas';
  }
}
