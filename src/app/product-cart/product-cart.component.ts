import { ShopingCartService } from './../services/shoping-cart.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
@Input('product')product;
@Input('show-actions')showActions = true;
@Input ('shopping-cart') shoppingCart;

  constructor(private cartService:ShopingCartService) { }

  ngOnInit() {
  }

  addToCart(product) {
  this.cartService.addToCart(product);
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    console.log(item.quantity);
    return item ? item.quantity : 0 ;
  }

}
