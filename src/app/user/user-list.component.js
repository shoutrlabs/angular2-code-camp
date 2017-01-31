import { Component, EventEmitter } from '@angular/core';
import { UsersService } from './users.service';


@Component({
	selector: 'user-list',
	template: `
	<ul>
		<li *ngFor="let user of users">
			{{ user.firstName }} {{ user.lastName }}
		</li>
	</ul>
	`,
})
export class UserListComponent {
	static get parameters() {
		return [[ UsersService ]];
	}
	constructor(usersService) {
		this.users = usersService.users;
		this.notify = new EventEmitter(false);
	}
}
