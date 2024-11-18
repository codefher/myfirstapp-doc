import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  // * controllers es un array de clases que heredan de Controller
  controllers: [TasksController],
  // ? providers es un array de clases que heredan de Provider (es decir, las clases que se inyectan en el constructor)
  providers: [TasksService],
})
export class TasksModule {}
