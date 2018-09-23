import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/component/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductComponent } from './shopping/component/product/product.component';
import { ShoppingModule } from './shopping/shopping.module';




@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,
    RouterModule.forRoot([
      { path: '', component: ProductComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    AdminAuthGuardService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
