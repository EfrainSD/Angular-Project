import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent
{ 
  @Input({ required: true }) task!: Task;

  private taskService = inject(TasksService);

  onTaskCompleted()
  {
    this.taskService.removeTask(this.task.id);
  }
}