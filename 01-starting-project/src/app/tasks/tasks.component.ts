import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "./dummy-tasks";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent
{
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  
  isAddingTask = false;

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

  onCancelAddTask()
  {
    this.isAddingTask = false;
  }

  onAddTask(newTaskData: NewTaskData)
  {
    // If we want to put it at the end -> PUSH, but if we want to put it at the beginning, we use UNSHIFT
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate
    });
  }
}