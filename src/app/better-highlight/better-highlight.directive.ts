import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";
  @Input() highlightTextColor: string = "yellow";

  @HostBinding("style.backgroundColor") backgroundColor: string = this.defaultColor;
  @HostBinding("style.color") color: string = "black";

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.highlightColor);
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.defaultColor);
  }

  @HostListener("click") click(eventData: Event) {
    this.color = this.highlightTextColor;
  }

}
