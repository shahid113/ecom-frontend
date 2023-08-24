import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private http:HttpClient, private toast:ToastrService, private cartService:CartService, private router:Router) { }

  baseURL:string="https://easy-gold-cow.cyclic.cloud/api";

     createOrder(data:any){
         this.http.post<any>(this.baseURL+'/order/new', data, {observe:'response'})
         .subscribe((result)=>{
            this.toast.success(result.body.message)
            this.cartService.removeAllCart();
            this.router.navigate(['/myorders'])
         })
     }

     getOrderData(user:string){
         return this.http.get<any>(this.baseURL+'/order/'+user);
     }

     cancelOrder(data:any){
      return this.http.put<any>(this.baseURL+`/order/${data.id}`, data);
     }
}
