import { Injectable } from '@angular/core';
import {GenericDaoService} from './generic-dao.service';
import {Product} from '../Models/Product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDaoService {

  constructor(private genericDao: GenericDaoService) { }

  fetchAllProducts(): Observable<Product[]> {
    return this.genericDao.sendGetRequest('products', false)
      .pipe(map((responseData: { message: string, products: Product[]}) => {
        console.log(responseData.products);
        return responseData.products;
      }));
  }

  fetchProduct(id: number): Observable<Product> {
    return this.genericDao.sendGetRequest(`products/${id}`, false)
      .pipe(map((responseData: { message: string, product: Product}) => {
        console.log(responseData.product);
        return responseData.product;
      }));
  }

  createProduct(title: string, description: string, price: number, stock: number, imageurl: string) {
    return this.genericDao.sendPostRequest(
      "products/manage/create",
      {title: title, description: description, price: price, stock: stock, imageurl: imageurl},
      true).toPromise().then().catch(error => console.log(error));
  }

  deleteProduct(id: number) {
    return this.genericDao.sendPostRequest("products/manage/delete", {id: id}, true).toPromise()
      .then()
      .catch(error => console.log(error));
  }
}
