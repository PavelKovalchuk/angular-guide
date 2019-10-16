import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers', // as element: <app-servers></app-servers>
  // selector: '[app-servers]', // as attribute: <div app-servers ></div>
  // selector: '.app-servers', // as class: <div class="app-servers"></div>
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  @Input() servers = [];

}
