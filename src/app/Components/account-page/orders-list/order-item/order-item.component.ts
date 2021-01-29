import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../../Models/Order';
import {Product} from '../../../../Models/Product';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit(): void {
  }

  getOrderPrice(): number {
    let total: number = 0;
    for(let i=0;i<this.order.getProducts().length;i++){
      total = (total*1 + this.order.getProductIndex(i).price*1);
    }
    return total;
  }

}
