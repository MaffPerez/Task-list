import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from '../directives/aplhanumeric.module';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    TasksComponent,
    CardTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    DirectiveModule
  ]
})
export class TasksModule { }
