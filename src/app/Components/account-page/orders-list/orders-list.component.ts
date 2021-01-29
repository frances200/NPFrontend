import { Component, OnInit } from '@angular/core';
import {Order} from '../../../Models/Order';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.orders = this.user.getUser().getOrders();
  }

}
