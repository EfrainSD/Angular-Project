import { NgModule } from "@angular/core";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { UIModule } from "../ui/ui.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// In this case we only have one component, but if we had more we could add them here 
@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent], // Export the components that we want to use outside this module
    imports: [UIModule, CommonModule, FormsModule]
})
export class TasksModule { }