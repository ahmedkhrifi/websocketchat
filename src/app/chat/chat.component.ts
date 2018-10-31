import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import {Socket} from 'ngx-socket-io';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatForm: FormGroup;
msg: any;
list = {};
messages: Array<{name: String, message: String}> = [];

  constructor(private router: Router, private chatservice: ChatService, private apiService: ApiService, private socket: Socket) {
    this.chatForm = new FormGroup({
      name: new FormControl('', [ Validators.required]),

      message: new FormControl('', [Validators.required])
    });


   }
   doSomething() {
     this.msg = this.chatForm.value.name + ' is typing a message...';
     console.log('aa');
   }
  ngOnInit() {
    // this.msg = '';
  // this.chatservice.getMessage().subscribe((data: any) => {
// this.messages.push(data ) ;
this.msg = '';
this.apiService.getmessage().subscribe(res => {
  this.list = res.json();

});

    // });
  }

  sendmessage() {

  if (this.chatForm.valid) {
    console.log('ok');
// this.chatservice.sendMessage(this.chatForm.value);
this.apiService.postmessage(this.chatForm.value).subscribe(res => {
  this.ngOnInit();
  console.log(res.json());
});

}

}
deleteBtn(id) {
  if (confirm('are you sure to delete this message')  === true) {
    this.apiService.deletemessage(id).subscribe(res => {
      this.ngOnInit();
      console.log(res.json());
    });
  }
}

}
