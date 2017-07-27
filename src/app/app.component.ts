import { Component } from '@angular/core';
import {MessageService} from "./messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage=false;
  message:{text:string, type:string}

  constructor(private _messageService:MessageService){

  }
  ngOnInit() {
    this._messageService.getMessages()
      .subscribe(_message =>{
        if(_message){
          this.message = _message;
          this.showMessage = true;

          //3 saniye icinde kullanici mesaji kapatmazsa
          //otomatik kendisi kapanir
          setTimeout(() => {this.showMessage = !this.showMessage},3000)
        }
      })
  }
}
