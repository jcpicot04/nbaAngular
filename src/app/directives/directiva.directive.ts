import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.directiva('#DDA0DD');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.directiva("");
  }

  private directiva(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
