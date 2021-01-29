import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../Models/Product';
import {ShoppingCartService} from '../../../../Services/shopping-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.cartService.removeFromCart(this.product);
  }
}
