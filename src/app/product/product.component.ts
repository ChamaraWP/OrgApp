import { ShopingCartService } from './../services/shoping-cart.service';
import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';
import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  subscriptionProd: Subscription;
  filterdProduct: any[];
  products: any[] = [];
  categories: any[];
  category: string;
  cart:any;
  cartSubcription:Subscription;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private shoppingCartService:ShopingCartService) {

    }

  async ngOnInit() {

    this.productService.getAll().pipe(switchMap(prodData => {
      this.products = prodData;
      console.log(this.products);
      return this.route.queryParamMap
    })).subscribe(params => {
      this.category = params.get('categoryId');
     this.filterdProduct = (this.category) ?
     this.products.filter(p => p.category === this.category ) : this.products;

    });

    this.cartSubcription =( await this.shoppingCartService.getCart())
    .subscribe(cart =>this.cart = cart);

  }

  ngOnDestroy() {
    // this.subscriptionProd.unsubscribe();
    this.cartSubcription.unsubscribe();
  }

}
