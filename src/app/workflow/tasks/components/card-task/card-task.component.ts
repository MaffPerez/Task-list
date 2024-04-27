import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from '../../models/tasks.interface';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent {

  @Input() tasks!: Tasks[];
  @Output() sendId = new EventEmitter<number>();

  deleteTask(id: number) {
    this.sendId.emit(id);
  }

}
