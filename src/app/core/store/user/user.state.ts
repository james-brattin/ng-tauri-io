import { User } from '../../models/user.model';

export interface UserState {
  usersLoaded: boolean;
  users: User[];
}

export const initialUserState: UserState = {
  usersLoaded: false,
  users: [],
};
