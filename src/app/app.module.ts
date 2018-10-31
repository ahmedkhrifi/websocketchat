
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CommonModule } from '@angular/common';
const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
