import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
	constructor() {
		this.users = [
			{
				firstName: 'poop',
				lastName: 'peee',
			},
			{
				firstName: 'Falko',
				lastName: 'Krause',
			},
		];
	}

	add(user) {
		this.users.push(user);
	}

	remove(user) {
		this.users = this.users.filter(u => u.firstName != user.firstName);
	}
}
