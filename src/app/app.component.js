// app.component.js
import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'app',
  template: `<h1> Hello {{ name }} </h1>
    <fun-element (notify)="updateName($event)"></fun-element>`,
  styles: ['h1 { color: red }'],
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
