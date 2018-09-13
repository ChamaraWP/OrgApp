import { ShopingCartService } from './shoping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase, private cartService:ShopingCartService) { }

 async placeOrder(order){
   let result =  this.db.list('/orders').push(order);
   this.cartService.clearCart();
   return result;
  }
}
