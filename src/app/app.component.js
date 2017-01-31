// app.component.js
import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app',
  template: `
<div class="body">
  <header>
  	<h1> THIS IS THE HEADER {{ name }} </h1>
  </header>
  <main>
  	<div>
  		<user-list></user-list>
  	</div>
  	<aside>
  		some sidemenu
  	</aside>
  </main>
</div>
    `,
  styles: [require('./app.component.sass')],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  constructor() {
    this.name = 'world';
  }

  updateName(event) {
    console.log(event);
    this.name = event;
  }
}
