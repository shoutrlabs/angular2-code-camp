import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  template: `<ul><li *ngFor="let user of users">{{ user.firstName }}</li></ul>`,
})
export class UserListComponent {
  static get parameters() {
    return [[ UsersService]];
  }
  constructor(userServi e) {
    this.users = usersService.users;
  }
}
