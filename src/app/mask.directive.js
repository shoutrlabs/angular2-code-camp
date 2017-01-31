import { Directive } from '@angular/core';

@Directive({
  selector: 'input[mask]',
  host: {
    '(input)': 'transform($event)',
  }
})
export class InputMaskDirective {
  transform(event) {
    const newVal = this.maskInput(event.target.value);
    if (newVal && event.target.value !== newVal) {
      event.target.value = newVal;
    }
  }
  maskInput(maskMe) {
    return maskMe.replace(/.$/, String.fromCharCode(Math.random()*255));
  }
}
