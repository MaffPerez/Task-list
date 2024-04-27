import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const tasksMock = [
  { id: 1, description: 'Up early', isChecked: false },
  { id: 2, description: 'Take the dog for a walk', isChecked: false }
];

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [ TasksComponent ],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: () => of('testUser')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task', () => {
    const task = 'Up early';
    component.addTask(task);
    expect(component.tasks[0].description).toBe(task);
  });

  it('should delete task', () => {
    const taskId = 1;
    component.tasks = tasksMock;
    const result = [
      { id: 2, description: 'Take the dog for a walk', isChecked: false }
    ];
    component.deleteTask(taskId);
    expect(component.tasks).toEqual(result);
  });

  it('should return false if task description is unique', () => {
    component.tasks = tasksMock;
    const result = component.validateisUniqueTask('New task');
    expect(result).toBeFalsy();
  });

});
