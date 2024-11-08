import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  // * controllers es un array de clases que heredan de Controller
  controllers: [TasksController],
})
export class TasksModule {}
