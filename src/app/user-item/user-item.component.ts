import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../Models/Interfaces";

@Component({
  selector: '[user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input('user') user : IUser
  @Input('index') index :number
  @Output() userSelectedEvent = new EventEmitter<{user:IUser, operation:string}>()

  constructor() { }

  ngOnInit() {

  }

  setUser(){
    this.userSelectedEvent.emit({user:this.user , operation:'detay'})
  }
  deleteUser(){
    this.userSelectedEvent.emit({user:this.user , operation:'sil'})
  }

}
