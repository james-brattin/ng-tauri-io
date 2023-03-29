import { Action, ActionReducer, ActionReducerMap, createAction, MetaReducer } from '@ngrx/store';
import { UserState } from './user/user.state';

export const LOGOUT = '[App] Logout';
export const logoutAction = createAction('[App] Logout');

export interface AppState {
  user: UserState;
}

// export const reducers: ActionReducerMap<AppState> = {};

// export function clearStateMetaReducer<State extends {}>(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function clearStateFn(state: State, action: Action) {
//     if (action.type === LOGOUT) {
//       state = {} as State; // Emptying state here
//     }
//     return reducer(state, action);
//   };
// }

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ?
//   [clearStateMetaReducer, storageSyncReducer] : [clearStateMetaReducer, storageSyncReducer];
