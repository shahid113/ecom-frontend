import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { ProductObject } from 'src/app/services/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  baseURL:string="https://easy-gold-cow.cyclic.cloud/api";

  getProducts(page:number){
     return this.http.get<ProductObject>(this.baseURL+`/products?page=${page}&limit=8`);
  }

  createProduct(data:any){
    return this.http.post<any>(this.baseURL+'/product/new', data)
  }

  deleteProduct(id:string){
       return this.http.delete(this.baseURL+'/product/'+id)
  }

  getProductDetails(id:string){
    return this.http.get(this.baseURL+'/product/'+id);
  }

  updateProduct(data:any){
    return this.http.put(this.baseURL+`/product/${data.id}`, data);
  }
  

}
