import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {

  constructor(private router: Router, public cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  checkout(){
    if(this.cart.getProducts().length === 0)
      return;

    this.router.navigate(['/checkout']).then();
  }

  getTotalPrice(): number {
    let total: number = 0;
    for(let i=0;i<this.cart.getProducts().length;i++){
      total += this.cart.getProducts()[i].price*1;
    }
    return total;
  }
}
