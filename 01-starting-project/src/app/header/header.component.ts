// Importar el decorador Component desde Angular
import { Component } from '@angular/core';

// Configuramos el componente
@Component({
    selector: 'app-header', // Nombre del selector del componente
    standalone : true, // Indicamos que es un componente independiente, por defecto suele estar a true de la versión 19 en adelante
    templateUrl: './header.component.html', // Ruta al archivo HTML del componente
    styleUrls: ['./header.component.css'], // Ruta al archivo CSS del componente
})

// Comenzamos exportando la clase que le dará nombra
export class HeaderComponent {}

