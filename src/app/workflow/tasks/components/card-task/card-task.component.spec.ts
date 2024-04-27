import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTaskComponent } from './card-task.component';

describe('CardTaskComponent', () => {
  let component: CardTaskComponent;
  let fixture: ComponentFixture<CardTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit task ID when deleteTask is called', () => {
    const taskId = 1;
    const emitSpy = spyOn(component.sendId, 'emit');
    component.deleteTask(taskId);
    expect(emitSpy).toHaveBeenCalledWith(taskId);
  });
});
