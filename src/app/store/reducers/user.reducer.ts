import { createReducer, on } from '@ngrx/store';
import { User } from '../../auth/interface/user.interface';
import { loginSuccess } from '../actions/user.actions';

export interface UserState {
  user: string;
  loggedIn: boolean;
}

export const initialState: UserState = {
  user: '',
  loggedIn: false,
};

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loggedIn: true,
  }))
);
