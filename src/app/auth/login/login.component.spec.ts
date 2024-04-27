import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { User } from '../interface/user.interface';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginPresenter } from './login.presenter';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;
  let presenterLogin: LoginPresenter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: () => of('testUser')
          }
        },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        LoginPresenter
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    presenterLogin = TestBed.inject(LoginPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to tasks page if user is valid', () => {
    const userCredentials: User = { user: 'test01', password: 'test01' };
    spyOn(authService, 'isValidUser').and.returnValue(true);
    component.validateUser(userCredentials);
    expect(router.navigate).toHaveBeenCalledWith(['tasks']);
    expect(component.isLoginError).toBeFalsy();
  });

  it('should isLoginError true if user is not valid', () => {
    const userCredentials: User = { user: 'test01', password: 'test01' };
    spyOn(authService, 'isValidUser').and.returnValue(false);
    component.validateUser(userCredentials);
    expect(component.isLoginError).toBeTruthy();
  });
});
