import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/models';
import { ProsService } from '../services/pros.service';

@Component({
  selector: 'app-productnode',
  templateUrl: './productnode.component.html',
  styleUrls: ['./productnode.component.css']
})
export class ProductnodeComponent implements OnInit{
  products: Observable<Product[]>;
  products1: Product[] =[];
  constructor(private service: ProsService) {
    this.products = this.service.getProducts();
    this.service.getProducts().subscribe(data=>(this.products1 = data))
   }
  
  ngOnInit(): void {
    
  }
}
