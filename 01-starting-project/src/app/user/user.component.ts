import { Component, Input } from '@angular/core';

// Importamos los datos ficticios de usuarios
// import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent
{
  // Con signal es una forma de notificar a Angular cuando un atributo cambia su valor y utilizar eso para otra cosa
  // selectedUser = signal(randomUser); // Este atributo ahora es accesible en el HTML del componente

  // Necesitamos crear una variable que se pueda modificar desde fuera de esta scripts
  @Input() avatar!: string; // Usando el ! le indicamos que ahora mismo no esta inicizalizado pero que lo estará
  @Input() name!: string;

  // Ahora con las signals podemos usar computed para que solo se ejecuta cuando cambie el valor de selectedUser
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // Estar sería la forma normal sin signals
  get imagePath() { return 'assets/users/' + this.avatar; }

  onSelectUser()
  {
    // Debemos usar el set, ya que está dentro de un signal y así cambiamos su valor
    // this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])
  }
}