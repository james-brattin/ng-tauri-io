import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Features } from '../state.features';
import { UserState } from './user.state';

export const selectUserFeatureSelector = createFeatureSelector<UserState>(Features.User);

export const selectUsersLoaded = createSelector(
  selectUserFeatureSelector,
  state => state?.usersLoaded
);

export const selectUsers = createSelector(
  selectUserFeatureSelector,
  state => state?.users
);

export const selectUsersPage = createSelector(
  selectUsersLoaded,
  selectUsers,
  (ready, users) => {
    if (!ready) { return { ready: false }; }
    return { ready, users };
  }
);
