import { switchMap } from 'rxjs/operators';
import { OrderService } from './../services/order.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  constructor(private authService:AuthService,private orderService:OrderService) { }
  orders$;

  ngOnInit() {
    this.orders$ = this.authService.user$.pipe(switchMap(u => this.orderService.getOrdersByUser(u.uid)));


  }

}
