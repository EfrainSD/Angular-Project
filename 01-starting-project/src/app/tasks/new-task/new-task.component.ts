import { Component, EventEmitter, Output, signal } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { FormsModule } from '@angular/forms'; // If we import this FormsModule, it also prevents the form from being sent via the link, and it will automatically remain on the client side

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent
{
  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDueDate = '';

  // OTHER OPTION: Using signals
  // newTaskTitle = signal('');
  // newTaskSummary = signal('');
  // newTaskDueDate = signal('');

  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<(NewTaskData)>();

  onCancel()
  {
    this.cancel.emit();
  }

  onAddTask()
  {
    this.addTask.emit(
    {
      title: this.newTaskTitle,
      summary: this.newTaskSummary,
      dueDate: this.newTaskDueDate
    });

    this.onCancel(); // To close the form after adding the task
  }
}
