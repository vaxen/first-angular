import {Component} from '@angular/core';
import {Server} from "../types";

@Component({selector: 'servers-list', templateUrl: 'servers-list.component.html'})
export class ServersListComponent {
  id = 10;
  serverStatus: 'online' | 'offline';
  disableCreate = true;
  lastServerCreated: string;
  serverName = ''
  servers : Server[] = [];

  constructor() {

  }

  changeServerStatus = () => {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  };

  onCreateServer = () => {
    this.changeServerStatus();
    this.servers.push({name: this.serverName, status: this.serverStatus})
    this.lastServerCreated = this.serverName;
    this.resetCreationInput();
  }

  resetCreationInput = () => {
    this.serverName = '';
  }
}
