import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { Response } from "express"
import { TaskDto } from './dto/task.dto';
import { ValidationPipe } from 'src/core/pipe/class-validationpipe';
@Controller("task")
export class Taskontroller {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    getAllTask(@Res() res: Response) {
        const data = this.taskService.getAllTask();
        return res.status(200).send(data);
    }
    @Post()

    createTask(@Body() task: TaskDto, @Res() res: Response) {
        const data = this.taskService.addTask(task);
        return res.status(200).send(data);
    }

}
