import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [
    {serverId: 10, name: "First", status: "online", content: "content 1111"},
    // {serverId: 12, name: "Second", status: "offline", content: "content 2222"}
  ];

  onServerAdded(serverData: {name: string, status: string, content: string}) {
     this.servers.push({
      serverId: this.servers.length + 1,
      name: serverData.name,
      status: serverData.status,
      content: serverData.content,
    });
  }
}
