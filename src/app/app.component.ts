import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [{serverId: 10, name: "First", status: "online"}, {serverId: 12, name: "Second", status: "offline"}];

  onServerAdded(serverData: {name: string, status: string}) {
     this.servers.push({
      serverId: this.servers.length + 1,
      name: serverData.name,
      status: status,
    });
  }
}
