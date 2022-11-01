import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(event){
    this.serverCreationStatus = 'Server was created!'
    console.log(event)
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value
 }

}
