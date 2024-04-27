import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: () => of('testUser')
          }
        },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    spyOn(authService, 'getStatusUser').and.returnValue(true);
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTruthy();
  });

});
