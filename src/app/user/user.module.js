import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users.service';
import { UserListComponent } from './user-list.component'

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		UserListComponent,
	],
	exports: [
		UserListComponent,
	],
	providers: [
		UsersService,
	],
})
export default class { }
