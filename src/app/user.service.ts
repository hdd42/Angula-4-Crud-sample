import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {IGetResponse, IUser} from "./Models/Interfaces";
import {HttpClient, HttpParams} from "@angular/common/http";



@Injectable()
export class UserService {

  constructor(@Inject('API') private api, private http: HttpClient) {

  }

  getUsers({limit = '10', skip = '0'}): Observable<IGetResponse> {
    let url = `${this.api}/users`

    return this.http.get(url,{
      params:new HttpParams().set('limit', limit).set('skip', skip)
    })
  }

  getUserById(id) : Observable<IGetResponse>{
    let url = `${this.api}/users/${id}`

    return this.http.get(url)
  }

  addUser(user:IUser):Observable<boolean>{
    let url = `${this.api}/users`

    return this.http.post(url,user)
  }


  deleteUser(user:IUser):Observable<boolean>{
    let url = `${this.api}/users/${user._id}`

    return this.http.delete(url)
  }

  updateUser(user:IUser):Observable<boolean>{
    let url = `${this.api}/users/${user._id}`

    return this.http.put(url,user)
  }

}

//
