import { Products } from './../models/Products';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';
import { ShoppingCart } from '../models/shopping-cart';



@Injectable({
  providedIn: 'root'
})

export class ShopingCartService {
  newItem: Subscription;



  constructor(private db: AngularFireDatabase) {
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  async getCart():Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId()
    let cart = this.db.object('/shopping-carts/' + cartId).snapshotChanges().pipe(
      map((action:any) => {
        const key = action.key;
        const items = action.payload.val().items;
        return new ShoppingCart(key, items);
      })
    )
    return cart;
  }

  private async getOrCreateCartId():Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let results = await this.create()
    localStorage.setItem('cartId', results.key);
    return results.key
  }

  private getItem(cartId,productId){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }



  async addToCart(product) {
    let prod;
    let cartId = await this.getOrCreateCartId();
    let items: AngularFireObject<{}> = this.getItem(cartId,product.key);
    let itemSnap$ = items.snapshotChanges();
    itemSnap$.pipe(take(1)).subscribe(item => {

      prod = { product: item.payload.val() }
      //console.log(prod.product.quantity);
      let exists: boolean = item.payload.val() !== null;
      console.log("Exists: ", exists);
      if (exists) {
        items.update({product: product, quantity: (prod.product.quantity + 1 )});
      }
      else {
        items.set({ product: product, quantity: 1 });
      }
    })
  }

   async removeFromCart(product){
    let prod;
    let cartId = await this.getOrCreateCartId();
    let items: AngularFireObject<{}> = this.getItem(cartId,product.key);
    let itemSnap$ = items.snapshotChanges();
    itemSnap$.pipe(take(1)).subscribe(item => {

      prod = { product: item.payload.val() }
      //console.log(prod.product.quantity);
      let exists: boolean = item.payload.val() !== null;
      console.log("Exists: ", exists);
      if (exists) {
        items.update({product: product, quantity: (prod.product.quantity -1 )});
      }

    })
  }
}


