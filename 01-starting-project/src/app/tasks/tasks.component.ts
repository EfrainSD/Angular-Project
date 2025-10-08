import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "./dummy-tasks";
import { AddTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent
{
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  
  isAddingTask: boolean = false;

  tasks = DUMMY_TASKS;

  get selectedUserTasks()
  {
    // Filter is a Javascript fcuntion to obtain only those that belong to the selected user in this case
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompletedTask(taskId: string)
  {
    this.tasks = this.tasks.filter(task => task.id !== taskId); // Remove the completed task from the list
  }

  onAddNewTask()
  {
    this.isAddingTask = true;
  }
}