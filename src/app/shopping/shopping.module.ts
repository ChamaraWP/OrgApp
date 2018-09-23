import { SharedModule } from './../shared/shared.module';
import { AuthGuardService } from './../shared/services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { ShippingFormComponent } from './component/shipping-form/shipping-form.component';
import { ShoppingCartSummeryComponent } from './component/shopping-cart-summery/shopping-cart-summery.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { ProductComponent } from './component/product/product.component';
import { ProductFilterComponent } from './component/product-filter/product-filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductComponent },
      { path: 'shopping-cart', component: ShopingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] }
    ])

  ],
  declarations: [
    ProductComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    ShopingCartComponent,
    ShoppingCartSummeryComponent,
    ShippingFormComponent,
    ProductFilterComponent
  ]
})
export class ShoppingModule { }
