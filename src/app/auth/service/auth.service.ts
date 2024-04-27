import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState } from '../../store/reducers/user.reducer';
import { loginSuccess } from '../../store/actions/user.actions';
import { filter } from 'rxjs';
import { selectUserState } from '../../store/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$ = this.store.pipe(select(selectUserState));
  stateuser = false;

  constructor(
    private store: Store<UserState>
  ) { }

  isValidUser(username: string, password: string) {
    if (username === 'test01' && password === 'test01') {
      this.store.dispatch(loginSuccess({ user: username }));
      return true;
    } else {
      return false;
    }
  }

  getStatusUser(): boolean {
    this.currentUser$
      .pipe(filter(state => !!state))
      .subscribe(state => this.stateuser = state.loggedIn);
    return this.stateuser;
  }

}
