import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Necessary for web applications

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UIModule } from './ui/ui.module';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent,], // Register all the components that will work together (NO STANDALONE)
    bootstrap: [AppComponent], // Indicate the main component that will be loaded first
    imports: [BrowserModule, UIModule, TasksModule], // Import other modules/components if necessary (ONLY STANDALONE)
})

export class AppModule { }