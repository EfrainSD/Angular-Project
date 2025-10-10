import { Component, Input, Output, EventEmitter } from '@angular/core'; // In uppercase letters it is a “decoration”; in lowercase letters it is a special function
import { type UserInterface } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent
{
  @Input({ required: true }) user! : UserInterface;
  @Input({ required: true}) isSelected!: boolean;

  get imagePath() { return 'assets/users/' + this.user.avatar; }

  // Let's create a custom event to notify when a user is selected
  @Output() selectUser = new EventEmitter<string>(); // Can also specify the data type, which is recommended but optional

  onSelectUser()
  {
    this.selectUser.emit(this.user.id); // Notify that a user has been selected
  }
}