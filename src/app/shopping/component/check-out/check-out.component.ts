import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShopingCartService } from 'shared/services/shoping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shipping = {};
  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShopingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart()
  }

}
