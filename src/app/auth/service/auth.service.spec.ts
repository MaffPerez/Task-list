import { TestBed, fakeAsync } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Store, StoreModule } from '@ngrx/store';
import { UserState } from 'src/app/store/reducers/user.reducer';
import { loginSuccess } from 'src/app/store/actions/user.actions';

describe('AuthService', () => {
  let service: AuthService;
  let store: Store<UserState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ]
    });
    service = TestBed.inject(AuthService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch login success action if credentials are valid', fakeAsync(() => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const username = 'test01';
    const password = 'test01';
    service.isValidUser(username, password);
    expect(dispatchSpy).toHaveBeenCalledWith(loginSuccess({ user: username }));
  }));

  it('should return false if username and password are invalid', () => {
    const username = 'user';
    const password = 'pass';
    expect(service.isValidUser(username, password)).toBeFalsy();
  });
});
