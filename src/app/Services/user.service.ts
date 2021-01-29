import { Injectable } from '@angular/core';
import {User} from '../Models/User';
import {GenericDaoService} from './generic-dao.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Order} from '../Models/Order';
import {Product} from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<User>(null);

  constructor(private genericDao: GenericDaoService) { }

  setUser(user: User): void {
    this.user.next(user);
  }

  getUser(): User {
    return this.user.getValue();
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    await this.genericDao.sendPostRequest("auth/login", {email: email, password: password}, false).toPromise().then(result => {
      this.setUser(new User(result.id, result.email, result.firstname, result.surname, result.phone, result.role, result.token));
      window.sessionStorage.setItem("userToken", result.token);
    }).catch(() => {
      return false;
    });
    if(this.getUser()) {
      await this.genericDao.sendGetRequest("orders/fetch/user", true).toPromise().then(result => {
        for(let i in result.orders) {
          console.log(result.orders[i]);
          const order = new Order(result.orders[i].id, result.orders[i].status);
          for(let j in result.orders[i].products) {
            const product = result.orders[i].products[j];
            order.addProduct(new Product(product.id, product.name, product.description, product.price, product.stock, product.imageurl));
          }
          this.getUser().addOrder(order);
        }
      });
    }
    return !!this.getUser();
  }

  async registerUser(email: string, password: string, firstname: string, surname: string, phone: string): Promise<boolean> {
    let isCreated: boolean = false;
    await this.genericDao.sendPostRequest("auth/register", {email: email, password: password, firstname: firstname, surname: surname, phone: phone, role: "customer"},
      false).toPromise().then(result => {
        if(result.status !== 200)
          isCreated = false;
        isCreated =  true;
    }).catch(() => {
      isCreated = false;
    });
    return isCreated;
  }

  fetchTotalUsers(): Promise<number> {
    return this.genericDao.sendGetRequest('auth/count/total', true).toPromise().then(response => {
      return Number(response.message);
    });
  }
}
