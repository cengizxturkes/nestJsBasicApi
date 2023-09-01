import { Injectable } from "@nestjs/common";
import { Task } from "./interface/task";
import { TaskStoreService } from "./task-store-service";

@Injectable()
export class TaskService {
    constructor(private readonly taskstoreService: TaskStoreService) { }
    public async addTask(task: Task): Promise<Task> {
        task.completed = false;
        task.description = "Dummy";
        task.owner = "cengiz";
        task.duration = 2;
        this.taskstoreService.addTask(task);
        return task;
    }
    public async getTask(id: string): Promise<Task> {

        return this.taskstoreService.getTask(id)
    } public async getAllTask(): Promise<Task[]> {
        return this.taskstoreService.getAllTask();
    }
} 