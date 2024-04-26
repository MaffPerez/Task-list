import { Component } from '@angular/core';
import { Tasks } from '../models/tasks.interface';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  newTask = '';
  existError = false;
  tasks: Tasks[] = [];
  taskIdCounter = 1;

  addTask(task: string) {
    if (task) {
      this.existError = false;
      this.tasks.push({
        id: this.taskIdCounter++,
        description: task,
        isChecked: false
      })
      this.newTask = '';
    } else {
      this.existError = true;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
