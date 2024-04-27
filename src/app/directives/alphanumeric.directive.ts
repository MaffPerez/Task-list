import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]',
  standalone: false
})
export class AlphanumericDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const current: string = this.elementRef.nativeElement.value;
    const keyPressed: string = String(event.key);
    const textToEvaluate = current.concat(keyPressed);
    const regex: RegExp = new RegExp(/^[0-9a-zA-Z]+$/g);
    return (!regex.test(textToEvaluate)) ? event.preventDefault() : null;
  }

}
