import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductObject} from './interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    public searchItems=new BehaviorSubject<any>([]);

  constructor( private http:HttpClient) { }
   
  baseURL:string="https://easy-gold-cow.cyclic.cloud/api";

    getAllProducts(page:number){
        return this.http.get<ProductObject>(this.baseURL+`/products?page=${page}&limit=6`);
    }

    featuredProduct(){
      return this.http.get<ProductObject>(this.baseURL+'/products?page=1&limit=3')
    }

    getProductDetails(id:string){
      return this.http.get(this.baseURL+'/product/'+id);
    }

    searchProduct(value:any){
      this.http.get<any>(this.baseURL+`/search?key=${value}`).subscribe((result)=>{
         this.searchItems.next(result.product);
      })
    }

    



}
