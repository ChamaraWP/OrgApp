import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { OrderService } from './../services/order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../models/shopping-cart';
import { Order } from './../models/order';
import { ShopingCartService } from './../services/shoping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  shipping = {};
  cart:ShoppingCart;
  cartSubscription:Subscription;
  userSubcription:Subscription;
  userId:string;

  constructor(
    private cartService:ShopingCartService,
    private orderService:OrderService,
    private authService:AuthService,
    private router:Router) { }

  async ngOnInit() {
   let cart$ = await this.cartService.getCart()
   this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubcription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping,this.cart);
    let result  = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success/', result.key])
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubcription.unsubscribe();
  }

}
