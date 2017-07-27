import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {IUser} from "./Models/Interfaces";

@Injectable()
export class MessageService {

  MessagePublisher = new BehaviorSubject(null)
  ModalPublisher = new BehaviorSubject(null)
  DataPublisher = new BehaviorSubject(null)

  constructor() { }

  sendMessage(message:{text:string, type:string}){
    this.MessagePublisher.next(message)
  }

  getMessages():Observable<any>{
    return this.MessagePublisher.asObservable()
  }

//opsiyonel, popup i servisden acmak icin
  openModal(title,content){
    this.ModalPublisher.next({op:'open', title:title, content})
  }

  getModal():Observable<any>{
    return this.ModalPublisher.asObservable()
  }

  closeModal(){
    this.ModalPublisher.next({op:'close'})
  }

  //yeni eklenen her sey icin yayin
  //ayni mantikla update icinde kullanilabilir
  newDataAdded(data:any , type:string) {
    this.DataPublisher.next({data , type})
  }

  getDataPublisher():Observable<{data:any, type:string}>{
    return this.DataPublisher.asObservable()
  }


}
