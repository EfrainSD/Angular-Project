import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

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

  onAddNewTask()
  {
    this.isAddingTask = true;
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  }

  // This constructor runs automatically. And inside we put the instance we want it to create -> DEPENDENCY INJECTION
  constructor(private tasksService: TasksService) { } // Set it to private or public, automatically creates a property with that name

  get selectedUserTasks()
  {
    return this.tasksService.getUserTasks(this.userId);
  }
}