import { Injectable } from '@angular/core';
import {Product} from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Product[] = [];

  addToCart(product: Product): void {
    this.products.push(product);
  }

  removeFromCart(product: Product): void {
    const index = this.products.indexOf(product);
    if(index !== -1)
      this.products.splice(index, 1);
  }

  getProducts(): Product[] {
    return this.products;
  }

  clearCart(): Product[] {
    this.products = [];
    return this.products;
  }
}
