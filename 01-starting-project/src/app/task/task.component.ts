import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent
{
  @Input({ required: true }) userName!: string;
}
