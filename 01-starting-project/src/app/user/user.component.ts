import { Component, Input, computed, input, Output, EventEmitter, output } from '@angular/core'; // Con mayúsculas es un "decorado" con minúsculas es una función especial

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

  // Necesitamos crear una variable que se pueda modificar desde fuera de esta scripts usando Decoradores
  @Input({ required: true }) id!: string;
  @Input({ required: true // Indicamos que es obligatorio pasar este valor desde fuera (y comprueba en nuestro código si siempre que lo usamos tiene un valor)
  }) avatar!: string; // Usando el ! le indicamos que ahora mismo no esta inicizalizado pero que lo estará

  @Input({ required: true }) name!: string;

  // Ahora vamos a crear la misma variable pero usando signal
  // IMPORTANTE: En este caso las variables son solo de lectura, no las podemos cambiar más adelante de esta forma
  // avatar = input.required<string>(); // Podemos decir de que tipo es y también marcarla como obligatorio
  // name = input<string>(''); // Sino es obligatorio podemos darle un valor por defecto

  // Ahora con las signals podemos usar computed para que solo se ejecuta cuando cambie el valor de selectedUser
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // Estar sería la forma normal sin signals
  get imagePath() { return 'assets/users/' + this.avatar; }

  // Vamos a crear un evento personalizado para notificar cuando se selecciona un usuario
  @Output() selectUser = new EventEmitter<string>(); // También podemos poner el tipo de datos, recomendado, pero es opcional

  // Otra opción es usando las signals
  // selectUser = output<string>(); // No hay que hacer el new ya que lo hace internamente (es obligatorio decir el tipo de dato que emite)

  onSelectUser()
  {
    // Debemos usar el set, ya que está dentro de un signal y así cambiamos su valor
    // this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])

    this.selectUser.emit(this.id); // Emitimos el evento para notificar que se ha seleccionado un usuario
  }
}