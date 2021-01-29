import {Product} from './Product';

export class Order {
  id: number;
  products: Product[] = [];
  status: string;

  constructor(id: number, status: string) {
    this.id = id;
    this.status = status;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductIndex(index: number) {
    return this.products[index];
  }
}
