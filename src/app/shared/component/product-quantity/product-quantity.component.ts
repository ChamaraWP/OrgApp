import { ShopingCartService } from 'shared/services/shoping-cart.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit  {

@Input('product')product;
@Input ('shopping-cart') shoppingCart;

  constructor(private cartService:ShopingCartService) { }


  ngOnInit() {
  }

  addToCart() {
  this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  // getQuantity(){
  //   if(!this.shoppingCart) return 0;
  //   let item = this.shoppingCart.items[this.product.key];
  //   console.log(item.quantity);
  //   return item ? item.quantity : 0 ;
  // }


}
