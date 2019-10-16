import { Component, OnInit, EventEmitter, Output } from '@angular/core';


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
  serverCreationStatus = "No server was created";
  serverName = "";
  serverCreated = false;
  @Output() serverCreatedEvent = new EventEmitter<{name: string, status: string}>()

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! The name is " + this.serverName;
    this.serverCreated = true;
    this.serverCreatedEvent.emit({name: this.serverName, status: Math.random() > 0.5 ? "online" : "offline"});
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
