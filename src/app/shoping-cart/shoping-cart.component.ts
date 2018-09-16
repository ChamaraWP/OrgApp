import { ShopingCartService } from './../services/shoping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private cartService:ShopingCartService) { }
  cart$;
   async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart(){
    this.cartService.clearCart();
  }

}
