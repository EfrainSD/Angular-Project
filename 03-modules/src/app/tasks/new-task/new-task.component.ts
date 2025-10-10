import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent
{
  @Input({ required: true }) userId!: string;
  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDueDate = '';

  @Output() close = new EventEmitter<void>();

  // Since we have already created the service with a builder here, we simply call it
  private tasksService = inject(TasksService);

  onClose()
  {
    this.close.emit();
  }

  onAddTask()
  {
    this.tasksService.addTask(
    {
      title: this.newTaskTitle,
      summary: this.newTaskSummary,
      dueDate: this.newTaskDueDate
    }, this.userId);

    this.onClose(); // To close the form after adding the task
  }
}
