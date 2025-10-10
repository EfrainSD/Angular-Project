// Import the Component decorator from Angular.
import { Component, Output } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

// Create the component information
@Component({
  selector: 'app-root', // Name of the component to be used in the .html to reference it
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})

// We give the class a name for which we export it
export class AppComponent
{
  users = DUMMY_USERS;

  selectedUserId?: string; // Variable to store the selected user

  get selectedUser() // Use a getter to obtain the name of the selected user.
  {
      return this.users.find(u => u.id === this.selectedUserId); // Search for the user by their ID, and if we don't find them return undefined
  }

  // Ccreate a function that activates when a user clicks on it and sends us that user's ID
  onUserSelected(userId: string) // It is obligatory to specify the type of data received
  {
    this.selectedUserId = userId;
  }
}