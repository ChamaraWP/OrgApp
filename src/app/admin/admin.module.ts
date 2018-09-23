import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService } from './../shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-6-datatable';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders/:id', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] }
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,


  ]
})
export class AdminModule { }
