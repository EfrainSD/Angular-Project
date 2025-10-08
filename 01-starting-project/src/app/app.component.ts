// Import the Component decorator from Angular.
import { Component, Output } from '@angular/core';

// To add ngfor and ngif -> Import it and add it within the component imports
// import { NgFor, NgIf } from '@angular/common';

// Import the components to use them in this main component.
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './user/dummy-users';

// Create the component information
@Component({
  selector: 'app-root', // Name of the component to be used in the .html to reference it
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})

// We give the class a name for which we export it
export class AppComponent
{
  users = DUMMY_USERS;

  selectedUserId?: string; // Variable to store the selected user

  get selectedUserName() // Use a getter to obtain the name of the selected user.
  {
      return this.users.find(u => u.id === this.selectedUserId)?.name; // Search for the user by their ID, and if we don't find them return undefined
  }

  // Ccreate a function that activates when a user clicks on it and sends us that user's ID
  onUserSelected(userId: string) // It is obligatory to specify the type of data received
  {
    this.selectedUserId = userId;
  }
}