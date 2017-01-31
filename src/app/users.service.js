import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  constructor() {
    this.users = [{ firstName: 'poop' }];
  }

  add(user) {
    this.users.push(user);
  }
}
