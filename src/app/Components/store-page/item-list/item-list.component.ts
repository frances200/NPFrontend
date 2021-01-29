import { Component, OnInit } from '@angular/core';
import {Product} from '../../../Models/Product';
import {BehaviorSubject} from 'rxjs';
import {ProductDaoService} from '../../../Services/product-dao.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  products: Product[] = [];
  testEmitter$ = new BehaviorSubject<Product[]>(this.products);

  constructor(private productDAO: ProductDaoService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productDAO.fetchAllProducts().toPromise().then(products => {
      products.forEach(product => {
        this.products.push(new Product(product.id, product.name, product.description, product.price, product.stock, product.imageurl))
      })
      this.testEmitter$.next(this.products);
    });
  }
}
