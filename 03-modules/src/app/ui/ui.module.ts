import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

// In this case we only have one component, but if we had more we could add them here 
@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] // Export the components that we want to use outside this module
})
export class UIModule { }