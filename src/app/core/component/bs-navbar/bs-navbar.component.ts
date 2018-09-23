import { ShoppingCart } from 'shared/models/shopping-cart';
import { AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ShopingCartService } from 'shared/services/shoping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser:AppUser
  shoppingCartItemCount:number;
  cart$:Observable<ShoppingCart>

  constructor( private auth:AuthService, private cartService:ShopingCartService) {


  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
     this.cart$ = await this.cartService.getCart();
    //  this.cart$.valueChanges().subscribe(cart => {
    //   this.shoppingCartItemCount = 0;
    //       for(let productId in cart.items)
    //         this.shoppingCartItemCount += cart.items[productId].quantity

    //  })
  }

  logout(){
    this.auth.logout();
  }

}
