import { Component, OnInit } from '@angular/core';
import {Product} from '../../Models/Product';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProductDaoService} from '../../Services/product-dao.service';
import {ShoppingCartService} from '../../Services/shopping-cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product = null;
  testEmitter$ = new BehaviorSubject<Product>(this.product);

  constructor(private activatedRoute: ActivatedRoute, private productDAO: ProductDaoService, private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.productDAO.fetchProduct(id).toPromise().then(product => {
        this.product = product;
        this.testEmitter$.next(this.product);
    });
  }

  addToCart(): void {
    this.shoppingCart.addToCart(this.product);
  }
}
