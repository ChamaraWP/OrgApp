import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{

  items:ShoppingCartItem[] = [];
  constructor( public key: string,public itemsMap:{[productId:string]:ShoppingCartItem}){
    for (let productId in itemsMap){
      let item =itemsMap[productId]
      this.items.push(new ShoppingCartItem(item.product,item.quantity));
    }
  }

  // get productIds(){
  //   return Object.keys(this.items);
  // }
  getQuantity(product){
     let item = this.itemsMap[product.key];
    console.log(item.quantity);
    return item ? item.quantity : 0 ;
  }


  get totalPrice() {
    let sum = 0;
    for (let productId in this.items)
       sum += this.items[productId].totalPrice;
    return sum;
  }

  get totalItemCount() {
    let count = 0;
          for(let productId in this.items)
            count += this.items[productId].quantity
     return count;
  }
}
