import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './app-cockpit.component.html',
  styleUrls: ['./app-cockpit.component.css']
})
export class AppCockpitComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  allowNewServer = false;
  serverCreated = false;
  @Output() serverCreatedEvent = new EventEmitter<{name: string, status: string, content: string}>()
  @ViewChild("serverContentInput", {static: true}) serverContentInput: ElementRef;

  ngOnInit() {
  }

  onCreateServer(serverNameInput: HTMLInputElement) {
    this.serverCreatedEvent.emit({
      name: serverNameInput.value,
      status: Math.random() > 0.5 ? "online" : "offline",
      content: this.serverContentInput.nativeElement.value,
    });
  }

}
