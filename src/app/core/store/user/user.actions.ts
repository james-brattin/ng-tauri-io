import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

const loadUsers = createAction(
  '[Users page] Load users via service'
);

const usersLoaded = createAction(
  '[Users Effect] General lists loaded successfully',
  props<{ users: User[] }>()
);

const usersLoadedError = createAction(
  '[Users Effect] General lists loaded error'
);

export const userActionTypes = {
  loadUsers,
  usersLoaded,
  usersLoadedError,
};
