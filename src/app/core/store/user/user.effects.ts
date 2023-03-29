/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, tap, exhaustMap, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { BackendService } from '../../services/backend/backend.service';
import { userActionTypes } from './user.actions';
import { selectUsersLoaded } from './user.selectors';
import { UtilityService } from '../../services/utility/utility.service';

@Injectable()
export class UserEffects {

  constructor(
    private utility: UtilityService,
    private backend: BackendService,
    private actions$: Actions,
    private store: Store) { }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(userActionTypes.loadUsers),
    withLatestFrom(this.store.select(selectUsersLoaded)),
    filter(([_, loaded]) => !loaded),
    exhaustMap(() => this.backend.getAllUsers().pipe(
      map(users => userActionTypes.usersLoaded({ users })),
      catchError(() => of(userActionTypes.usersLoadedError())))
    )
  ));

  loadedUsersSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(userActionTypes.usersLoaded),
    tap(() => this.utility.changeLoading(false))
  ),{ dispatch: false });

  loadedUsersError$ = createEffect(() => this.actions$.pipe(
    ofType(userActionTypes.usersLoadedError),
    tap(() => this.utility.changeLoading(false)),
    // tap(() => this.utility.showToast('Could not load users'))
  ),{ dispatch: false });
}
