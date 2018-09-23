import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './component/bs-navbar/bs-navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports : [
    BsNavbarComponent
  ]
})
export class CoreModule { }
