import { Component, OnInit } from '@angular/core';
import {IMeta, IUser} from "../Models/Interfaces";
import {UserService} from "../user.service";
import {MessageService} from "../messages.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:IUser[]
  pagination:IMeta;
  page=0;
  selectedUser= null;
  operation ='detay'

  constructor(private _userService:UserService , private _messageService:MessageService) { }

  ngOnInit() {
    this.getUsers({})
    this._messageService.DataPublisher
      .subscribe(message =>{

        if(message && message.type == 'user'){
          let user :IUser = message.data;
          user.new = true
          this.users.unshift(user)
        }
      })
  }

  private getUsers({limit = '10', skip = '0'}){

    this._userService.getUsers({limit,skip})
      .subscribe(_res =>{
        this.users = _res.data
        this.pagination = _res.meta
      })
  }

  paginate(page){
    console.log("page : ",page)
    this.users = null;
    console.log("Event : ",this.page)
    let newPage = `${this.page *10}`
    this.getUsers({skip:newPage})
  }

  setSelectedUser($event:{user:IUser , operation:string}){
    this.selectedUser =$event.user
    this.operation = $event.operation;
  }


  close(user:IUser){

    if(!user){
      this.selectedUser=null
    }else{
     this.users = this.users.filter(u => u._id !=user._id)
      this.selectedUser=null
    }
  }

}
