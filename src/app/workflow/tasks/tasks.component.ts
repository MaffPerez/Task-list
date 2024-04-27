import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs';
import { selectCurrentUser } from 'src/app/store/selectors/user.selector';
import { ERROR_MESSAGE } from 'src/app/workflow/tasks/constants/tasks.constants';
import { Tasks } from 'src/app/workflow/tasks/models/tasks.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  newTask = '';
  tasks: Tasks[] = [];
  taskIdCounter = 1;
  messageError = '';
  currentUser!: string;
  currentUser$ = this.store.pipe(select(selectCurrentUser));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getUserStore();
  }

  getUserStore(): void {
    this.currentUser$
      .pipe(filter(user => !!user))
      .subscribe(user => this.currentUser = user);
  }

  addTask(task: string) {
    if (!task) {
        this.messageError = ERROR_MESSAGE.EMPTY_TASK;
        return;
    }

    if (!this.validateisUniqueTask(task)) {
        this.tasks.push({
            id: this.taskIdCounter++,
            description: task,
            isChecked: false
        });
        this.messageError = '';
    } else {
        this.messageError = ERROR_MESSAGE.REPEATED_TASK;
    }
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  validateisUniqueTask(taskDescription: string) {
    return this.tasks.some(task => task.description.toLowerCase() === taskDescription.toLowerCase());
  }
}
