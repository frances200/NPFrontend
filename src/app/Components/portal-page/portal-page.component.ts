import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {ProductDaoService} from '../../Services/product-dao.service';
import {OrderService} from '../../Services/order.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent implements OnInit {

  totalOrders: number = 0;
  totalUsers: number = 0;
  totalOrdersEmitter = new BehaviorSubject<number>(this.totalOrders);
  totalUsersEmitter = new BehaviorSubject<number>(this.totalUsers);

  constructor(private userService: UserService, private router: Router, private productService: ProductDaoService, private orderService: OrderService) { }

  ngOnInit(): void {
    if(!this.userService.getUser() || this.userService.getUser().role === 'customer') {
      this.router.navigate(['/store']).then();
      return;
    }
    this.loadData();
  }

  addProduct(title: string, description: string, price: string, stock: string, imageurl: string) {
    this.productService.createProduct(title, description, Number(price), Number(stock), imageurl)
      .then()
      .catch(error => console.log(error));
  }

  removeProduct(id: string) {
    this.productService.deleteProduct(Number(id))
      .then()
      .catch(error => console.log(error));
  }

  loadData(): void {
    this.orderService.fetchTotalOrders().then(response => {
      this.totalOrders = response;
      this.totalOrdersEmitter.next(this.totalOrders);
    });
    this.userService.fetchTotalUsers().then(response => {
      this.totalUsers = response;
      this.totalUsersEmitter.next(this.totalUsers);
    });
  }
}
