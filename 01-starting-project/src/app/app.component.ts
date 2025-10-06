// Importamos el decorador Component desde Angular
import { Component } from '@angular/core';

// Importamos los componentes para usarlos en este componente principal
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';

// Creamosla información del componente conocido como decorador para añadir metadatos
@Component({
  selector: 'app-root', // Nombre del componente que se usará en el .html
  standalone: true,
  imports: [HeaderComponent, UserComponent], // Importamos el HeaderComponent para usarlo en este componente
  templateUrl: './app.component.html', // Enlace a su HTML
  styleUrls: ['./app.component.css'], // Enlace a su CSS
})

// Una vez creado le damos un nombre a la clase por la cual lo exportamos
export class AppComponent
{
  users = DUMMY_USERS;
}