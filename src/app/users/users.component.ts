import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userActionTypes } from '../core/store/user/user.actions';
import { selectUsersPage } from '../core/store/user/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  vm$ = this.store.select(selectUsersPage);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(userActionTypes.loadUsers());
  }

}
