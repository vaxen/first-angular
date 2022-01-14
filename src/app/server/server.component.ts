import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../types";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input()server: Server;
  constructor() { }

  ngOnInit(): void {
  }

  getStatusColor = () => {
    if(this.server?.status){
      return this.server.status === 'online' ? 'green' : 'red';
    }
  }

}
