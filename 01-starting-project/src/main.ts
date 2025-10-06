// Importamos la función necesaria para iniciar la aplicación Angular
import { bootstrapApplication } from '@angular/platform-browser';

// Importamos el componente que nosotros hemos creado.
// IMPORTANTE: Se pone el nombre pero no la extensión .ts
import { AppComponent } from './app/app.component';

// Iniciamos la aplicación, lo normal es que le pasemos una clase ya que el resto dependerá de ella.
bootstrapApplication(AppComponent).catch(err => console.error(err));