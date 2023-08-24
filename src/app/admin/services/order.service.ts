import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

   
  baseURL:string="https://easy-gold-cow.cyclic.cloud/api";

  getOrderData(){
    return this.http.get<any>(this.baseURL+'/order')
  }

  getOrderById(id:string){
    return this.http.get<any>(this.baseURL+'/order/view/'+id)
  }
}
