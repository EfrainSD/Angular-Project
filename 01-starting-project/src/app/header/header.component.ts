import { Component } from '@angular/core';

// Configure the component
@Component({
    selector: 'app-header', // Component selector name
    standalone : true, // Indicate that it is an independent component; by default, it is usually set to true from version 19 onwards.
    templateUrl: './header.component.html', // Path to the component's HTML file
    styleUrls: ['./header.component.css'], // Path to the component's CSS file
})

// Export the class with a name.
export class HeaderComponent {}