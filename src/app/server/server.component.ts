import { Component, Input } from '@angular/core';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`
    .online {
      color: white;
    }
  `],
})
export class ServerComponent {
  constructor() {

  }

  // using alias, or without it we can use element attribute [element]="server"
  @Input("server-data") element: {serverId: number, name: string, status: string};

  getServerStatus() {
    return this.element.status;
  }

  getColor() {
    return this.element.status === "online" ? "green" : "red";
  }
}
