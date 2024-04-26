import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../../models/tasks.interface';

@Component({
  selector: 'app-card-task',
  standalone: false,
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent {
  @Input() tasks!: Tasks[];
  @Output() sendId = new EventEmitter<number>();

  deleteTask(id: number) {
    this.sendId.emit(id);
  }

}
