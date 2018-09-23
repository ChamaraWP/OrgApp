import { Order } from '../models/order';
import { map } from 'rxjs/operators';
import { ShopingCartService } from './shoping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase, private cartService:ShopingCartService) { }


  getOrders() {
    return this.db.list<any>('/orders',ref => ref.orderByChild('datePlaced')).snapshotChanges().pipe(map(items => {
      return items.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return { key, ...data }; // We can use {key,data} in case data is not object
      })
    }))
  }

  getOrdersByUser(userId: string){
    // https://stackoverflow.com/questions/47129039/query-does-not-exist-in-type-queryfn-angularfire2
    return this.db.list<any>('/orders', ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          return <Order>({
            key: action.key,
            datePlaced: action.payload.val().datePlaced,
            items: action.payload.val().items,
            userId: action.payload.val().userId,
            shipping: action.payload.val().shipping,
            shoppingCart: action.payload.val().shoppingCart
          })
        })
      })
    );
  }

 async placeOrder(order){
   let result =  this.db.list('/orders').push(order);
   this.cartService.clearCart();
   return result;
  }
}
