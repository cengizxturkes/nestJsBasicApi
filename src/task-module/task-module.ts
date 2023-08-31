import { Module } from '@nestjs/common';
import { Taskontroller } from './task-controller';
import { TaskService } from './task.service';
import { TaskStoreService } from './task-store-service';

@Module({
    imports: [],
    controllers: [Taskontroller],
    providers: [TaskService, TaskStoreService],
})
export class TaskModule { }
