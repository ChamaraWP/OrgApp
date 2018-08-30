import { Products } from './../../models/Products';
import { ProductService } from './../../services/product.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:any[];
  filterdProducts:any[];
  subcription:Subscription;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.subcription = this.productService.getAll().subscribe(data => {
      this.filterdProducts = this.products = data;
      console.log(this.products);
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  filter(query:string) {
    console.log(query);
    this.filterdProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())):
    this.products
  }


}
