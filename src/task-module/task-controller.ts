import { Controller, Get, Post, Res } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { Response } from "express"
@Controller("task")
export class Taskontroller {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    getAllTask(@Res() res: Response) {
        const data = this.taskService.getAllTask();
        return res.status(200).send(data);
    }


}
