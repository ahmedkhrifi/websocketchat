import { Injectable, NgModule } from '@angular/core';
import { Socket } from 'ngx-socket-io';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }
  sendMessage(msg: string) {
    this.socket.emit('chat', msg);
}
 getMessage() {
    return this.socket
        .fromEvent('chat');

}


}
