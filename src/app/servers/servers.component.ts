import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // as element: <app-servers></app-servers>
  // selector: '[app-servers]', // as attribute: <div app-servers ></div>
  // selector: '.app-servers', // as class: <div class="app-servers"></div>
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
