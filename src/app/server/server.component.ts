import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`
    .online {
      color: white;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerComponent {
  constructor() {

  }

  // using alias, or without it we can use element attribute [element]="server"
  @Input("server-data") element: {serverId: number, name: string, status: string, content: string};

  getServerStatus() {
    return this.element.status;
  }

  getColor() {
    return this.element.status === "online" ? "green" : "red";
  }
}
