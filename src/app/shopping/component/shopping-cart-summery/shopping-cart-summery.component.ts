import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'shopping-cart-summery',
  templateUrl: './shopping-cart-summery.component.html',
  styleUrls: ['./shopping-cart-summery.component.css']
})
export class ShoppingCartSummeryComponent implements OnInit {
@Input('cart') cart:ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}
