import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../../Services/shopping-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(public cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
