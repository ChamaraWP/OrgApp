import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DataTableModule } from 'angular-6-datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { ProductQuantityComponent } from './component/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShopingCartService } from './services/shoping-cart.service';
import { UserService } from './services/user.service';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [
    ProductCartComponent,
    ProductQuantityComponent
  ],
  exports:[
    ProductCartComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    CommonModule
  ],
  providers:[
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShopingCartService,
    OrderService
  ]
})

export class SharedModule { }
