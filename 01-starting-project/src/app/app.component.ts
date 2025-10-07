// Importamos el decorador Component desde Angular
import { Component, Output } from '@angular/core';

// Para añadir el ngfor, tendríamos que importalo y dentro de los imports del componente añadirlo
// import { NgFor, NgIf } from '@angular/common';

// Importamos los componentes para usarlos en este componente principal
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './user/dummy-users';

// Creamosla información del componente conocido como decorador para añadir metadatos
@Component({
  selector: 'app-root', // Nombre del componente que se usará en el .html
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html', // Enlace a su HTML
  styleUrls: ['./app.component.css'], // Enlace a su CSS
})

// Una vez creado le damos un nombre a la clase por la cual lo exportamos
export class AppComponent
{
  users = DUMMY_USERS;

  selectedUserId?: string; // Variable para almacenar el usuario seleccionado

  get selectedUserName() // Usamos un getter para obtener el nombre del usuario seleccionado
  {
      return this.users.find(u => u.id === this.selectedUserId)?.name; // Buscamos el usuario por su id y si no lo encuentra ponemos una cadena vacía
  }

  // Vamos a crear una función que al pulsar a un usuario se active y nos envía el id de ese usuario
  onUserSelected(userId: string) // Es olbigatorio decir el tipo de dato que recibe
  {
    this.selectedUserId = userId; // Guardamos el id del usuario seleccionado
  }
}