import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color: string;
  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.background = 'green';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.background = this.color;
  }

  @HostListener('mouseout') mouseOut(){
    this.element.nativeElement.style.background = null;
  }
}