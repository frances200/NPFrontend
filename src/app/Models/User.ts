import {Order} from './Order';

export class User {
  id: number;
  email: string;
  firstname: string;
  surname: string;
  phone: string;
  role: string;
  token: string;
  orders: Order[] = [];

  constructor(id: number, email: string, firstname: string, surname: string, phone: string, role: string, token: string) {
    this.id = id;
    this.email = email;
    this.firstname = firstname;
    this.surname = surname;
    this.phone = phone;
    this.role = role;
    this.token = token;
  }

  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }
}
