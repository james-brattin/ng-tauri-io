import { createReducer, on } from '@ngrx/store';
import { userActionTypes } from './user.actions';
import { initialUserState, UserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,

  on(userActionTypes.usersLoaded, (state, { users }): UserState => ({ ...state, usersLoaded: true, users }))
);
