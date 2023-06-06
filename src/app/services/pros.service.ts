import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProsService {

  constructor(private http: HttpClient) { }

    getProducts():Observable <Product[]>{
    return this.http.get<Product[]>('http://localhost:8000/api/products/');

    }

    insertProduct(product:Product): Observable<Product> {
      //	const headers = { 'content-type': 'application/json'} 
      //	console.log(JSON.stringify(item))						
        return this.http.post<Product>('http://localhost:8000/api/insert/', product);
    }
}
