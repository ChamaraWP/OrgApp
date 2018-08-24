import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShopingCartComponent,
    LoginComponent,
    MyOrderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'products', component:ProductComponent},
      {path: 'shopping-cart', component:ShopingCartComponent},
      {path: 'login', component:LoginComponent},

      {path: 'check-out', component:CheckOutComponent,canActivate:[AuthGuardService]},
      {path: 'my/orders', component:MyOrderComponent,canActivate:[AuthGuardService]},
      {path: 'order-success', component:OrderSuccessComponent,canActivate:[AuthGuardService]},

      {path: 'admin/products', component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path: 'admin/orders', component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]}
    ])
  ],
  providers: [AuthService,
              AuthGuardService,
              UserService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
