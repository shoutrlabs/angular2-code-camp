import { Component } from '@angular/core';

@Component({
	selector: 'my-header',
	template: `
	<h1> My header </h1>
	<ul>
		<li>nav 1</li>
		<li>nav 2</li>
	</ul>
	`,
	styles: ['ul: {background: #eee}'],
})
export class MyHeaderComponent {}
