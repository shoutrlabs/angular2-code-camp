// fun.component.js
import { Component, EventEmitter } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'fun-element',
  template: `
  <input mask="muh-mask" (keyup)="notify.emit($event.currentTarget.value);" />
  <ul>
    <li *ngFor="let user of users"> {{ user.firstName }}</li>
  </ul>
  `,
  outputs: ['notify'],
})
export class FunComponent {
  static get parameters() {
    return [[ UsersService ]];
  }
  constructor(usersService) {
    this.users = usersService.users;
    this.notify = new EventEmitter(false);
  }

  saveInput(event) {
    this.notify.emit(event);
    console.log(event);
  }
}
