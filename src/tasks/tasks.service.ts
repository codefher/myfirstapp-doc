import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable() // * Injectable es un decorador que sirve para inyectar dependencias, inyecta codigo en el constructor
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      // * NotFoundException es una clase de excepción que se utiliza para indicar que no se ha encontrado el recurso
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: updateTaskDto) {
    console.log(task);
    return 'Task updated successfully';
  }

  deleteTask() {
    return 'Task deleted successfully';
  }

  updateTaskStatus() {
    return 'Task patched successfully';
  }
}
