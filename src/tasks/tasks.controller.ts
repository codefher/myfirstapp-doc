import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  // * Este constructor se utiliza para inyectar la dependencia TasksService en el constructor del controlador
  constructor(private tasksService: TasksService) {}

  // ? @Get() es un decorator que indica que la función getAllTasks es una función de Get
  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Successfully get all tasks' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getAllTasks(@Query() query: any) {
    // * @Query es un decorador que recibe un parámetro query
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTasks(@Param('id') id: string) {
    // * @Param es un decorador que recibe un parámetro id
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  createTask(@Body() task: CreateTaskDto) {
    // * @Body es un decorador que indica que el parámetro task recibe un objeto JSON
    return this.tasksService.createTask(task);
  }

  @Put('/:id') // ? el  @Put realiza la actualización de todos los registros de la tabla tasks. Actualización completa
  updateTask(@Body() task: updateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete('/:id')
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch('/:id') // ? @Patch realiza la actualización de cualquier registro de la tabla tasks. Actualizacion parcial
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
