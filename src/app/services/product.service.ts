import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) {

  }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
   return this.db.list('/products').snapshotChanges()
   .pipe(map(items => {
    return items.map(a => {
      const data = a.payload.val();
      const key = a.payload.key;
      return { key, ...data }; // We can use {key,data} in case data is not object
    })
  }))
  }

  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId,product) {
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/'+productId).remove()
  }
}
