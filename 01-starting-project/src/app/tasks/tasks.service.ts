import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

// Add the Injectable decorator so that Angular knows it is a service
@Injectable({ providedIn: 'root' })
export class TasksService
{
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary: 'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];

    // Checks whether a local record exists and, if so, uses that local record
    constructor()
    {
        const tasks = localStorage.getItem('tasks');

        if (tasks)
        {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string)
    {
        // Filter is a Javascript fcuntion to obtain only those that belong to the selected user in this case
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(newTaskData: NewTaskData, userId: string)
    {
        // If we want to put it at the end -> PUSH, but if we want to put it at the beginning, we use UNSHIFT
        this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: newTaskData.title,
        summary: newTaskData.summary,
        dueDate: newTaskData.dueDate
        });
    }

    removeTask(taskId: string)
    {
        this.tasks = this.tasks.filter(task => task.id !== taskId); // Remove the completed task from the list
    }

    // Save all the changes we make to tasks locally
    private saveTasks()
    {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}