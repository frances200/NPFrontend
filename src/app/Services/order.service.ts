import { Injectable } from '@angular/core';
import {GenericDaoService} from './generic-dao.service';
import {Observable} from 'rxjs';
import {Product} from '../Models/Product';
import {map} from 'rxjs/operators';
import {Order} from '../Models/Order';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private genericDao: GenericDaoService, private user: UserService) { }

  fetchAllOrders(): Observable<Order[]> {
    return this.genericDao.sendGetRequest('order', false)
      .pipe(map((responseData: { message: string, orders: Order[]}) => {
        console.log(responseData.orders);
        return responseData.orders;
      }));
  }

  fetchOrder(id: number): Observable<Order> {
    return this.genericDao.sendGetRequest(`orders/${id}`, false)
      .pipe(map((responseData: { message: string, order: Order}) => {
        console.log(responseData.order);
        return responseData.order;
      }));
  }

  async createOrder(userID: number, status: string, products: Product[]): Promise<boolean> {
    let isCreated: boolean = false;
    const body = {
      userID: userID,
      status: status,
      products: products
    }
    await this.genericDao.sendPostRequest(`orders/manage/create`, body, true).toPromise().then(() => {
      const order: Order = new Order(this.user.getUser().getOrders().length, status);
      order.products = products;
      this.user.getUser().addOrder(order);
      isCreated = true;
    }).catch(() => {
      isCreated = false;
    });
    return isCreated;
  }

  fetchTotalOrders(): Promise<number> {
    return this.genericDao.sendGetRequest('orders/count/total', true).toPromise().then(response => {
      return Number(response.orders);
    });
  }
}
