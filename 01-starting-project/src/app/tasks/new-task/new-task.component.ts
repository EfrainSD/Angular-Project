import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { FormsModule } from '@angular/forms'; // If we import this FormsModule, it also prevents the form from being sent via the link, and it will automatically remain on the client side
import { TasksService } from '../tasks.service';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent
{
  @Input({ required: true }) userId!: string;
  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDueDate = '';

  // OTHER OPTION: Using signals
  // newTaskTitle = signal('');
  // newTaskSummary = signal('');
  // newTaskDueDate = signal('');

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
