import { Component, OnInit } from '@angular/core';
import { Tasks } from '../models/tasks.interface';
import { ERROR_MESSAGE } from '../constants/tasks.constants';
import { Store, select } from '@ngrx/store';
import { UserState } from '../../store/reducers/user.reducer';
import { Observable, filter } from 'rxjs';
import { User } from '../../auth/interface/user.interface';
import { selectCurrentUser } from '../../store/selectors/user.selector';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
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

    if (!this.isUniqueTask(task)) {
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

  isUniqueTask(taskDescription: string) {
    return this.tasks.some(task => task.description.toLowerCase() === taskDescription.toLowerCase());
  }
}
