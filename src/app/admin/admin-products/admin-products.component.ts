import { ProductService } from './../../services/product.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {

  constructor(private productService:ProductService) { }

  products:any [];
  subcription:Subscription;

  ngOnInit() {
    this.subcription = this.productService.getAll().subscribe(data => {
      this.products = data;
      console.log(this.products);

    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }


}
