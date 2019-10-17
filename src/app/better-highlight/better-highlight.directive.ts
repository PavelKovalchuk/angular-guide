import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "brown");
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
  }

  @HostListener("click") click(eventData: Event) {
    this.backgroundColor = "coral";
  }

}
