import { Component, Input, computed, input, Output, EventEmitter, output } from '@angular/core'; // In uppercase letters it is a “decoration”; in lowercase letters it is a special function

// To define data types, we can create them as follows
type User = {
  id : string;
  avatar : string;
  name : string;
}

// Another option is to create an interface instead of a type (MORE COMMON)
interface UserInterface
{
  id : string;
  avatar : string;
  name : string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent
{
  // SIGNALS: It is a way to notify Angular when an attribute changes its value and use that for something else
  // selectedUser = signal(randomUser); // This attribute is accessible in the component's HTML
  // IMPORTANT: In this case, the variables are read-only; we cannot change them later in this way
  // avatar = input.required<string>(); // We can specify what type it is and also mark it as mandatory
  // name = input<string>(''); // If it is not mandatory, we can give it a default value

  // ANOTHER OPTION: Use @Input to receive data from outside the component (MOST COMMON)
  // @Input({ required: true }) id!: string;
  // @Input({ required: true // Indicate that it is mandatory to pass this value from outside (and check in our code that whenever we use it, it has a value)
  // }) avatar!: string; // Using the !, we indicate that it is not initialized right now but that it will be

  // @Input({ required: true }) name!: string;

  // Another option would be to create a single object with those characteristics
  @Input( { required: true }) user! : UserInterface;

  // SIGNALS: Can use computed so that it only runs when the value of selectedUser changes
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // Being would be the normal form without signals
  get imagePath() { return 'assets/users/' + this.user.avatar; }

  // Let's create a custom event to notify when a user is selected
  @Output() selectUser = new EventEmitter<string>(); // We can also specify the data type, which is recommended but optional

  // SIGNALS: Other way to create an output
  // selectUser = output<string>(); // There is no need to use new, as it does this internally (it is mandatory to specify the type of data it outputs)

  onSelectUser()
  {
    // We must use the set, since it is inside a signal, and thus we change its value
    // this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])

    this.selectUser.emit(this.user.id); // We issue the event to notify that a user has been selected
  }
}