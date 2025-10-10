// This is how you start if instead of a component you have a Module
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)