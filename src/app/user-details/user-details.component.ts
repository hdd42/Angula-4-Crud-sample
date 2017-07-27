import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IUser} from "../Models/Interfaces";
import {UserService} from "../user.service";
import {MessageService} from "../messages.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input('user') user :IUser
  @Input('operation') operation :string
  @Output() closeDetailsEvent = new EventEmitter<any>()

  constructor(private _userService:UserService, private _messageService : MessageService) { }

  ngOnInit() {

  }

  close(user=null){
    this.closeDetailsEvent.emit(user)
  }

  deleteUser(){
    this._userService.deleteUser(this.user)
      .subscribe(_res => {
        this.close(this.user)
      },
        (err) => {
         this._messageService.closeModal();
          this._messageService.sendMessage({text:'Bir hata olustu!', type:'danger'})
        } )

  }


}
