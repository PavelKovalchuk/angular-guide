import {
  Component,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  constructor() {
    console.log("constructor called!");
  }

  // using alias, or without it we can use element attribute [element]="server"
  @Input("server-data") element: {
    serverId: number;
    name: string;
    status: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild("heading", {static: false}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngOnInit called!");
    // console.log("textContent: ", this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked.
    // Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit called!");
    console.log("++++ textContent contentParagraph: ", this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit called!");
    console.log("textContent: ", this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy called!");
  }

  getServerStatus() {
    return this.element.status;
  }

  getColor() {
    return this.element.status === "online" ? "green" : "red";
  }
}
