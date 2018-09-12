import { Products } from './Products';
export class  ShoppingCartItem {


    constructor (public product:Products, public quantity:number) {}
  get totalPrice() {
    return this.product.price * this.quantity;
  }
}
