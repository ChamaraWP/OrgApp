import { Products } from './../models/Products';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ShopingCartService {
  newItem:Subscription;



  constructor(private db: AngularFireDatabase) {
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId)  return cartId;

    let results = await this.create()
    localStorage.setItem('cartId', results.key);
    return results.key
  }


  async addToCart(product) {
    let prod ;
    let cartId = await this.getOrCreateCartId();
    let items:AngularFireObject<{}>  = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    let itemSnap$ = items.snapshotChanges();
    itemSnap$.pipe(take(1)).subscribe(item => {

      prod = { product:item.payload.val()}
      console.log(prod.product.quantity);
      let exists: boolean = item.payload.val() !== null;
      console.log("Exists: ", exists);
     if (exists) {
       items.update({ quantity:prod.product.quantity + 1  });
      }
      else {
        items.set({ product: product, quantity: 1 });
      }


    })
  }
}


