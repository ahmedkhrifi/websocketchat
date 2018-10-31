import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http, private socket: Socket) { }
  postmessage(form) {
    return this.http.post('http://localhost:3000/chat/msg', form);
  }
  getmessage() {
    return this.http.get('http://localhost:3000/chat/msg');
  }
  deletemessage(id) {
    return this.http.delete('http://localhost:3000/chat/msg/' + id);
  }
  newMessage() {
    return this.socket
         .fromEvent('chat');

  }
}
