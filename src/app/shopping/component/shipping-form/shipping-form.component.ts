import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { ShopingCartService } from 'shared/services/shoping-cart.service';
import { Order } from 'shared/models/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {

  @Input('cart') cart:ShoppingCart;
  shipping = {};
  userSubcription:Subscription;
  userId:string;

  constructor(
    private cartService:ShopingCartService,
    private orderService:OrderService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.userSubcription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.userSubcription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping,this.cart);
    let result  = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success/', result.key])
  }



}
