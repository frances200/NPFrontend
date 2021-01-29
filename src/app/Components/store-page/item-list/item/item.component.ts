import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../Models/Product';
import {ShoppingCartService} from '../../../../Services/shopping-cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
