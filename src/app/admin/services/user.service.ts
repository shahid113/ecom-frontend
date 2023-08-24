import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseURL:string="https://easy-gold-cow.cyclic.cloud/api";

  getAllUser(){
    return this.http.get<any>(this.baseURL+'/users');
  }
}
