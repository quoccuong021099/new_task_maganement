import { Task, TaskStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const newTask: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
